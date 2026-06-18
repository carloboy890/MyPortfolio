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
      className="p-3 absolute flex h-[90%] max-h-[68%] w-[95%] top-35 overflow-y-auto z-2
      max-lg:h-[44%] max-lg:top-52 max-lg:pt-3
      max-md:max-h-full max-md:h-[80%] max-md:top-15 max-md:w-full "
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

// max-2xl:h-130
// max-xl:w-235 max-xl:h-110
// max-lg:w-182 max-lg:h-83
// max-md:w-full max-md:h-150
// max-sm:h-250"
