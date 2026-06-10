import React from "react";
import ChatBubble from "./ChatBubble";

function InnerChatBox({
  passedUsername,
  passedAdminUsername,
  messageSent,
  chatEndRef,
  switchField,
  loadingMore,
}) {
  // const ids = messageSent.map((msg) => msg._id);

  // const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);

  // console.log("Duplicates:", duplicates);

  const ids = messageSent.map((msg) => msg._id);

  console.log("Total messages:", ids.length);
  console.log("Unique messages:", new Set(ids).size);

  return (
    <div
      className="absolute p-3 justify-between flex bottom-39 h-140 w-270 overflow-y-scroll"
      ref={chatEndRef}
    >
      {switchField === "AskMe" && (
        <div className="w-full box-border">
          {loadingMore && (
            <div className="text-center z-20 text-xl py-2">
              Opening old messages...
            </div>
          )}

          {messageSent.map((msg) => {
            return (
              <ChatBubble
                key={msg._id}
                messageSent={msg}
                firstMess={messageSent}
                isMine={
                  passedAdminUsername
                    ? msg.role === "admin" || msg.role === "system"
                    : msg.username === passedUsername
                }
              />
            );
          })}
        </div>
      )}

      {switchField === "Community" && (
        <div className="w-full box-border">
          {messageSent.map((msg) => {
            return (
              <ChatBubble
                key={msg._id}
                messageSent={msg}
                isMine={
                  passedAdminUsername
                    ? msg.role === "admin"
                    : msg.username === passedUsername
                }
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default InnerChatBox;

//   <div>
//     <ChatBubble />
//   </div>
// </div>
