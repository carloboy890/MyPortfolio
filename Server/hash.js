import bcrypt from "bcrypt";

const password = "$chatAppADMIN$"; // choose your admin password

bcrypt.hash(password, 10).then((hash) => {
  console.log("HASH:", hash);
});
