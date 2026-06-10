import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);
app.use(express.json());

// const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(process.env.MONGO_URI);

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db("chatApp");
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
  }
}

//Registration Field

function checkUsername(req, res, next) {
  const { username } = req.body;

  if (!username || username.trim() === "") {
    return res.json({
      success: false,
      code: "USERNAME_REQUIRED",
      message: "Username is required",
    });
  }

  next();
}

async function checkUserExists(req, res, next) {
  const { username } = req.body;

  try {
    const isAdmin = username === "admin8080";

    req.existingUser = await db.collection("users").findOne({ username });

    req.isAdmin = isAdmin;
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

app.post("/reg-username", checkUsername, checkUserExists, async (req, res) => {
  const { username } = req.body;

  try {
    if (req.isAdmin) {
      req.existingAdmin = await db.collection("admin").findOne({ username });
      if (req.existingAdmin) {
        return res.json({
          success: false,
          code: "USER_EXISTS",
          message: "User already exists!",
        });
      }
    }

    const users = await db.collection("users").find().toArray();
    const adminUser = await db.collection("admin").find().toArray();

    if (req.existingUser) {
      return res.json({
        success: false,
        code: "USER_EXISTS",
        message: "User already exists!",
      });
    }

    await db.collection("users").insertOne({ username });

    return res.json({
      success: true,
      message: "User created",
      code: "USER_CREATED",
      message1: "Registration Successful",
      user: { username },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error" });
  }
});

//Login Field USER

async function checkLoginUserExist(req, res, next) {
  const { username } = req.body;

  try {
    const existingUser = await db.collection("users").findOne({ username });

    if (!existingUser) {
      return res.json({
        success: false,
        code: "NO_USER_FOUND",
        message: "User does not exist",
      });
    }

    req.existingUser = existingUser;
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

async function userToMessage(req, res, next) {
  const { username, adminUsername } = req.body;

  try {
    const existingMessUser = await db
      .collection("AskMe-Messages")
      .find({ username: username });
    if (!existingMessUser) {
      await db.collection("AskMe-Messages").insertOne({ username });
    }
    if (adminUsername === "admin8080") {
      await db.collection("AskMe-Messages").insertOne({ adminUsername });
      if (!existingMessUser) {
      }
    }

    req.existingMessUser = existingMessUser;
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error" });
  }
}

app.post(
  "/userLogin",
  checkUsername,
  checkLoginUserExist,
  userToMessage,
  async (req, res) => {
    const { username } = req.body;

    try {
      if (req.existingUser.username !== username) {
        return res.json({
          success: false,
          code: "INVALID_USERNAME",
          message: "Invalid Username",
        });
      }

      return res.json({
        success: true,
        code: "USER_LOGGED_IN",
        message: "Logging in..",
        username: username,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },
);

//Login Field admin

function checkAdminUsername(req, res, next) {
  const { adminUsername } = req.body;

  if (!adminUsername || adminUsername.trim() === "") {
    return res.json({
      success: false,
      code: "USERNAME_REQUIRED",
      message: "Admin username is required",
    });
  }

  next();
}

async function checkLoginAdminExist(req, res, next) {
  const { adminUsername } = req.body;
  try {
    const existingAdmin = await db
      .collection("admin")
      .findOne({ adminUsername });

    if (!existingAdmin) {
      return res.json({
        success: false,
        code: "NO_ADMIN_FOUND",
        message: "Admin does not exist",
      });
    }

    req.existingAdmin = existingAdmin;
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

app.post(
  "/adminLogin",
  checkAdminUsername,
  checkPass,
  checkLoginAdminExist,
  async (req, res) => {
    const { adminUsername, adminPassword } = req.body;

    try {
      const isMatch = await bcrypt.compare(
        adminPassword,
        req.existingAdmin.adminPassword,
      );

      if (!isMatch) {
        return res.json({
          success: false,
          code: "INVALID_PASSWORD",
          message: "Invalid Admin Password",
        });
      }

      return res.json({
        success: true,
        adminUsername: adminUsername,
        code: "ADMIN_LOGGED_IN",
        message: "Admin Logging in. .",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },
);

function checkPass(req, res, next) {
  const { adminPassword } = req.body;

  if (!adminPassword || adminPassword.trim() === "") {
    return res.json({
      success: false,
      code: "PASSWORD_REQUIRED",
      message: "Password is required",
    });
  }
  next();
}

//Sending Message

async function matchUser(req, res, next) {
  const { passedUsername, passedAdminUsername } = req.body;

  try {
    let user = null;
    let adminUser = null;

    if (passedUsername) {
      user = await db.collection("users").findOne({
        username: passedUsername,
      });

      if (!user) {
        return res.status(400).json({
          success: false,
          code: "MESSAGE_FAIL",
          message: "User not found",
        });
      }
    }

    if (passedAdminUsername) {
      adminUser = await db.collection("admin").findOne({
        adminUsername: passedAdminUsername,
      });

      if (!adminUser) {
        return res.status(400).json({
          success: false,
          code: "MESSAGE_FAIL",
          message: "Admin not found",
        });
      }
    }

    if (!user && !adminUser) {
      return res.status(400).json({
        success: false,
        code: "MESSAGE_FAIL",
        message: "No sender found",
      });
    }

    req.matchUser = user;
    req.matchAdminUser = adminUser;

    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

// async function checkFirstMessage(req, res, next) {
//   const { passedUsername, passedAdminUsername, selectedUser } = req.body;

//   try {
//     const user = passedUsername || selectedUser;
//     const admin = passedAdminUsername || "admin8080";

//     const conversationId = getConversationId(user, admin);

//     // Find existing messages
//     const existingMessage = await db
//       .collection("AskMe-Messages")
//       .findOne({ conversationId });

//     // If NO messages yet
//     if (!existingMessage) {
//       req.isFirstMessage = true;
//     } else {
//       req.isFirstMessage = false;
//     }

//     next();
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       message: "Server error",
//     });
//   }
// }

async function insertSystemMess(req, res, next) {
  const { passedUsername, passedAdminUsername, selectedUser } = req.body;

  const user = passedUsername || selectedUser;
  const admin = passedAdminUsername || "admin8080";

  const conversationId = getConversationId(user, admin);

  const systemMessExist = await db.collection("AskMe-Messages").findOne({
    conversationId,
    role: "system",
  });

  if (!systemMessExist) {
    setTimeout(async () => {
      try {
        await db.collection("AskMe-Messages").insertOne({
          conversationId,
          username: "System",
          role: "system",
          type: "first-message",
          text: "Thanks for reaching out! The admin is currently offline. Your message has been sent successfully and will be replied to as soon as possible.",
          createdAt: new Date(),
        });

        console.log("System message inserted");
      } catch (err) {
        console.error("System message error:", err);
      }
    }, 60000);
  }

  next();
}

function getConversationId(user, admin) {
  if (!user || !admin) return null;
  return [user, admin].sort().join("_");
}

app.post("/AskMe-Messages", matchUser, async (req, res) => {
  const { chatText, passedUsername, passedAdminUsername, selectedUser } =
    req.body;

  try {
    const user = req.matchUser?.username || passedUsername || selectedUser;
    const admin =
      req.matchAdminUser?.adminUsername || passedAdminUsername || "admin8080";

    const conversationId = getConversationId(user, admin);

    if (!conversationId) {
      return res.status(400).json({
        success: false,
        message: "Invalid conversation",
      });
    }

    await db.collection("AskMe-Messages").insertOne({
      conversationId,
      username: req.matchUser?.username || req.matchAdminUser?.adminUsername,
      role: req.matchUser ? "user" : "admin",
      text: chatText,
      gender: req.matchUser?.gender || req.matchAdminUser?.gender || null,
      createdAt: new Date(),
    });

    console.log(conversationId);

    return res.json({ success: true, code: "MESSAGE_SENT" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

//ADD GENDER

app.post("/set-gender", async (req, res) => {
  const { username, gender } = req.body;

  try {
    await db.collection("users").updateOne({ username }, { $set: { gender } });

    console.log(gender);

    res.json({
      success: true,
      message: "Gender saved",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.put("/update-read-count", async (req, res) => {
  try {
    const { username, readCount } = req.body;

    await db.collection("users").updateOne(
      { username },
      {
        $set: {
          adminReadCount: readCount,
        },
      },
    );

    res.json({
      message: "Read count updated",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Server error",
    });
  }
});

app.get("/reg-username", async (req, res) => {
  const users = await db.collection("users").find().toArray();
  res.json(users);
});

app.get("/userLogin", async (req, res) => {
  const users = await db.collection("users").find().toArray();
  res.json(users);
});

app.get("/AskMe-Messages", async (req, res) => {
  const {
    username,
    adminUsername,
    selectedUser,
    limit = 20,
    skip = 0,
  } = req.query;

  try {
    let filter = {};

    // BOTH USER + ADMIN (normal chat view)
    if (username && adminUsername) {
      const conversationId = [username, adminUsername].sort().join("_");

      filter = { conversationId };
    }

    // USER ONLY VIEW (chat with admin)
    else if (username) {
      const conversationId = [username, "admin8080"].sort().join("_");

      filter = { conversationId };
    }

    // ADMIN VIEW (must include selected user)
    else if (adminUsername && selectedUser) {
      const conversationId = [selectedUser, adminUsername].sort().join("_");

      filter = { conversationId };
    }

    const messages = await db
      .collection("AskMe-Messages")
      .find(filter)
      .sort({ createdAt: -1 }) // IMPORTANT: chat order
      .skip(Number(skip))
      .limit(Number(limit))
      .toArray();

    //Counts
    messages.reverse();

    const users = await db.collection("users").find({}).toArray();

    const readCounts = {};

    users.forEach((user) => {
      readCounts[user.username] = user.adminReadCount || 0;
    });

    res.json({
      success: true,
      data: messages,
      readCounts,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server error",
    });
  }
});

app.get("/AskMe-Counts", async (req, res) => {
  const { username, adminUsername, selectedUser, skip = 0 } = req.query;

  try {
    let filter = {};

    // BOTH USER + ADMIN (normal chat view)
    if (username && adminUsername) {
      const conversationId = [username, adminUsername].sort().join("_");

      filter = { conversationId };
    }

    // USER ONLY VIEW (chat with admin)
    else if (username) {
      const conversationId = [username, "admin8080"].sort().join("_");

      filter = { conversationId };
    }

    // ADMIN VIEW (must include selected user)
    else if (adminUsername && selectedUser) {
      const conversationId = [selectedUser, adminUsername].sort().join("_");

      filter = { conversationId };
    }

    const messages = await db
      .collection("AskMe-Messages")
      .find(filter)
      .sort({ createdAt: 1 }) // IMPORTANT: chat order
      .skip(Number(skip))
      .toArray();

    //Counts

    const users = await db.collection("users").find({}).toArray();

    const readCounts = {};

    users.forEach((user) => {
      readCounts[user.username] = user.adminReadCount || 0;
    });

    res.json({
      success: true,
      data: messages,
      readCounts,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server error",
    });
  }
});

// GET GENDER

app.get("/get-user", async (req, res) => {
  const { username } = req.query;

  try {
    const user = await db.collection("users").findOne({ username });

    res.json({
      success: true,
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = process.env.PORT || 5001;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
