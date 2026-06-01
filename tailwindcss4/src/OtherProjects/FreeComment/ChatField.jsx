import React, { useState, useContext, useEffect, useRef } from "react";
import chatField from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/chatField.svg";
import styles from "./Login/LoginInfo.module.css";
import happyEmoji from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/Emojis/happyEmoji.png";
import EmojiComponent from "./EmojiComponent";
import InnerChatBox from "./InnerChatBox";
import AdminChatHead from "./AdminChatHead";
import { UsernameContext } from "./FreeCommentApp";
import axios from "axios";
import AdminChatUsers from "./AdminChatUsers";
import PickGender from "./PickGender";

function ChatField() {
  const {
    passedAdminUsername,
    passedUsername,
    switchField,
    toGender,
    setToGender,
    setCheckingGender,
    isGender,
    setIsGender,
  } = useContext(UsernameContext);

  const chatEndRef = useRef(null);
  const isAtBottomRef = useRef(false);
  const isLoadingOldMessagesRef = useRef(false);
  const [chatText, setChatText] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const [errorMess, setErrorMess] = useState("");
  const [messageSucc, setMessageSucc] = useState("");
  const [messageSent, setMessageSent] = useState([]);
  const [openChatHead, setOpenChatHead] = useState(false);
  const [passUserInfo, setPassUserInfo] = useState([]);
  // const [isGender, setIsGender] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [readCounts, setReadCounts] = useState({});
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (switchField === "AskMe") {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/AskMe-Messages`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chatText,
              passedUsername,
              passedAdminUsername,
              selectedUser,
            }),
          },
        );
        const data = await response.json();
        console.log(data.message);

        if (data.code === "MESSAGE_FAIL") {
          setErrorMess(data.message);
        }

        if (data.code === "MESSAGE_SENT") {
          setMessageSucc(data.message);
          setTimeout(() => {
            scrollToBottom();
          }, 100);
        }

        const updatedMessages = await fetchMessages(0);

        setMessageSent(updatedMessages.data);
      }
      setChatText("");
    } catch (err) {
      console.error("Error connecting to the server:", err);
    }
  };

  useEffect(() => {
    const fetchAllMessages = async () => {
      if (!passedAdminUsername) return;

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/AskMe-Counts`,
        {
          params: {
            adminUsername: passedAdminUsername,
          },
        },
      );

      setAllMessages(response.data.data);
      setReadCounts(response.data.readCounts);
    };

    fetchAllMessages();

    // const interval = setInterval(() => {
    //   fetchAllMessages();
    // }, 3000);

    // return () => clearInterval(interval);
  }, [passedAdminUsername]);

  console.log(readCounts);

  //FETCHED MESSAGES

  const fetchMessages = async (skip = 0) => {
    let params = {
      limit: 20,
      skip,
    };

    // ADMIN VIEW
    if (passedAdminUsername) {
      params.adminUsername = passedAdminUsername;
      params.selectedUser = selectedUser;
    }

    // NORMAL USER VIEW
    else {
      params.username = passedUsername;
    }

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/AskMe-Messages`,
      {
        params,
      },
    );

    return response.data;
  };

  ///DEBUGGING STARTS HERE

  const loadMessages = async (newSkip = 0, append = false) => {
    if (passedAdminUsername && !selectedUser) {
      setMessageSent([]);
      return;
    }
    console.log("append:", append, "current length:", messageSent.length);
    const data = await fetchMessages(newSkip);

    if (data.data.length === 0) {
      setHasMore(false);
      return;
    }

    if (append) {
      setMessageSent((prev) => {
        const updated = [...data.data, ...prev];

        console.log(updated);

        return updated;
      });
      console.log("RENDER:", messageSent.length);
    } else {
      setMessageSent(data.data);
    }
    // const data = await fetchMessages(0);

    // setMessageSent(data.data);

    // console.log(messageSent.length);

    // console.log(data);
  };
  // loadMessages(0, false);

  // const interval = setInterval(() => {
  //   loadMessages();
  // }, 3000);

  // return () => clearInterval(interval);

  console.log("RENDER:", messageSent.length);

  const pollMessages = async () => {
    const data = await fetchMessages(0);

    setMessageSent((prev) => {
      const existingIds = new Set(prev.map((msg) => msg._id));

      const newMessages = data.data.filter((msg) => !existingIds.has(msg._id));

      // console.log(existingIds);
      // console.log(newMessages);

      console.log("Polling user:", selectedUser);
      console.log("Current messages:", messageSent.length);

      return [...prev, ...newMessages];
    });
  };

  useEffect(() => {
    loadMessages(0, false);

    const interval = setInterval(() => {
      pollMessages();
    }, 3000);

    return () => clearInterval(interval);
  }, [passedUsername, passedAdminUsername, selectedUser]);

  useEffect(() => {
    setMessageSent([]);
    setHasMore(true);

    loadMessages(0, false);
  }, [selectedUser]);

  // useEffect(() => {
  //   //IMMEDIATE FETCH FOR THE SELECTED USER BEFORE POLLING
  //   loadMessages(0, false);

  //   const interval = setInterval(() => {
  //     loadMessages(0, false);
  //   }, 60000);

  //   return () => clearInterval(interval);
  // }, [passedUsername, passedAdminUsername, selectedUser]);

  // =========================
  // LOAD MORE (INFINITE SCROLL)
  // =========================

  const loadMore = async () => {
    if (loadingMore || !hasMore) return;

    isLoadingOldMessagesRef.current = true;

    setLoadingMore(true);

    const nextSkip = messageSent.length;

    await loadMessages(nextSkip, true);

    setLoadingMore(false);
  };

  // useEffect(() => {
  //   const el = chatEndRef.current;
  //   if (!el) return;

  //   const handleScroll = () => {
  //     if (el.scrollTop < 10 && hasMore && !loadingMore) {
  //       loadMore();
  //     }
  //   };

  //   el.addEventListener("scroll", handleScroll);
  //   return () => el.removeEventListener("scroll", handleScroll);
  // }, [hasMore, loadingMore, messageSent]);

  //SCROLL ANIMATION

  // useEffect(() => {
  //   const el = chatEndRef.current;
  //   if (!el) return;

  //   el.scrollTo({
  //     top: el.scrollHeight,
  //     behavior: "smooth",
  //   });
  // }, [messageSent]);

  useEffect(() => {
    const el = chatEndRef.current;
    if (!el) return;

    const isAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 50;

    // isAtBottomRef.current = isAtBottom;

    const handleScroll = () => {
      isAtBottomRef.current = isAtBottom;
      if (el.scrollTop < 1 && hasMore && !loadingMore) {
        loadMore();
      }
      // console.log(el.scrollTop);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [hasMore, loadingMore, loadMore]);

  const scrollToBottom = () => {
    const el = chatEndRef.current;
    if (!el) return;

    el.scrollTo({
      top: el.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!messageSent.length) return;

    if (isLoadingOldMessagesRef.current) {
      isLoadingOldMessagesRef.current = false;
      return;
    }
  }, [messageSent]);

  // useEffect(() => {
  //   if (!messageSent.length) return;

  //   if (isAtBottomRef.current) {
  //     scrollToBottom();
  //   }
  // }, [messageSent, selectedUser]);

  // console.log(chatEndRef);
  // console.log(isAtBottomRef);

  ///DEBUGGING ENDS HERE

  //----->

  useEffect(() => {
    console.log(passedUsername);
    console.log(messageSent);
  }, [messageSent, passedUsername]);

  useEffect(() => {
    const img = new Image();

    img.src = chatField;

    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  if (!imageLoaded) {
    return (
      <div className="fixed w-full h-full flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="fixed w-full h-full">
      <div className="absolute right-20 top-3">Log Out</div>
      {toGender ? (
        <PickGender
          setIsGender={setIsGender}
          setToGender={setToGender}
          passedUsername={passedUsername}
          setCheckingGender={setCheckingGender}
        />
      ) : (
        <div className="absolute left-80">
          <img src={chatField} alt="Chat Field" className="h-245" />
          <div className="flex justify-center">
            <InnerChatBox
              errorMess={errorMess}
              messageSucc={messageSucc}
              messageSent={messageSent}
              chatEndRef={chatEndRef}
              passedUsername={passedUsername}
              passedAdminUsername={passedAdminUsername}
              passUserInfo={passUserInfo}
              switchField={switchField}
              loadMore={loadMore}
              hasMore={hasMore}
              loadingMore={loadingMore}
              // handleScroll={handleScroll}
              isAtBottomRef={isAtBottomRef}
            />
          </div>
          {showEmojis ? (
            <div className="absolute bottom-197 h-20 items-center flex left-65 w-160">
              <EmojiComponent setChatText={setChatText} />
            </div>
          ) : null}
          <div onClick={() => setShowEmojis((val) => !val)}>
            <img
              src={happyEmoji}
              alt=":)"
              className="h-12 w-12 absolute bottom-22 left-77 hover:scale-110 cursor-pointer ease-in-out duration-200"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex absolute bottom-21 right-20 w-180 justify-between"
          >
            <input
              type="text"
              value={chatText}
              className={`${styles.input} !w-160`}
              onChange={(e) => setChatText(e.target.value.slice(0, 150))}
            />
            <button
              type="submit"
              style={{
                boxShadow:
                  "inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)",
              }}
              className="inline-flex w-18 cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
            >
              Enter
            </button>
          </form>
        </div>
      )}
      {passedAdminUsername && (
        <AdminChatHead
          setOpenChatHead={setOpenChatHead}
          messageSent={allMessages}
          passedUsername={passedUsername}
          passedAdminUsername={passedAdminUsername}
          readCounts={readCounts}
        />
      )}
      {passedAdminUsername
        ? openChatHead && (
            <AdminChatUsers
              passedUsername={passedUsername}
              messageSent={allMessages}
              setPassUserInfo={setPassUserInfo}
              isGender={isGender}
              setSelectedUser={setSelectedUser}
              readCounts={readCounts}
              setReadCounts={setReadCounts}
              scrollToBottom={scrollToBottom}
            />
          )
        : null}

      {/* 
      {openChatHead && <AdminChatUsers passedUsername={passedUsername} />} */}
    </div>
  );
}

export default ChatField;
