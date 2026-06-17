import React from "react";
import MessageBoxTheme from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/MessageBoxTheme.svg";
import MessageAlert from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/MessageAlert.svg";

function AdminChatHead({ setOpenChatHead, messageSent, readCounts }) {
  const users = [
    ...new Set(
      messageSent
        .map((msg) => msg.username)
        .filter((username) => username !== "admin8080"),
    ),
  ];

  const textCount = users.reduce((total, username) => {
    const conversationId = [username, "admin8080"].sort().join("_");

    const userMessages = messageSent.filter(
      (msg) => msg.conversationId === conversationId && msg.role === "user",
    );

    const totalUserMessages = userMessages.length;

    const unreadCount = Math.max(
      0,
      totalUserMessages - (readCounts[username] || 0),
    );

    return total + unreadCount;
  }, 0);

  return (
    <div className="absolute h-full border-1 w-full">
      <div onClick={() => setOpenChatHead((prev) => !prev)} className="h-[10%]">
        <img
          src={MessageAlert}
          className="h-15 w-15 hidden  absolute cursor-pointer right-31 top-1 max-2xl:block z-1"
          alt="Message Alert"
        />
        <span
          className="font absolute text-[0.5rem] hidden
         max-2xl:inline-block max-2xl:right-37.5 max-2xl:top-5.5 text-white z-1"
        >
          {textCount}
        </span>
      </div>
      <div
        onClick={() => setOpenChatHead((prev) => !prev)}
        className="fixed right-0 top-205 hover:scale-110 transition duration-300"
      >
        <span
          className="font absolute text-[0.5rem] text-white top-8.5 left-35.5 z-10 font-Jost
       max-2xl:block max-2xl:absolute max-2xl:left-6.5 max-2xl:top-4.5 "
        >
          {textCount}
        </span>

        <img
          src={MessageAlert}
          className="h-15 w-15 absolute cursor-pointer right-31 top-4 max-2xl:block"
          alt="Message Alert"
        />

        <img
          src={MessageBoxTheme}
          className="h-30 w-75 cursor-pointer max-2xl:hidden"
          alt="Message Box Theme"
        />

        <div className="font-Jost absolute cursor-pointer top-20 left-27 font-bold text-xl z-10">
          Message
        </div>
      </div>
    </div>
  );
}

export default AdminChatHead;
