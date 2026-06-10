import React, { useState, createContext, useEffect } from "react";
import askMeLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/askMeLogo.svg";
import communityLogoBlock from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/communityLogoBlock.svg";
import AskMeChatField from "./AskMeChatField";
import CommunityChatField from "./CommunityChatField";

export const SwitchContext = createContext();

function UserFormInfo({ setOpenUserInfo, setSwitchField }) {
  return (
    <div className="h-full">
      <div
        onClick={() => {
          setOpenUserInfo(false);
          setSwitchField("AskMe");
        }}
        className="absolute left-30 top-17 transition-transform duration-200 hover:scale-110"
      >
        <img
          src={askMeLogo}
          alt="Ask Me"
          className="w-70 h-70 cursor-pointer"
        />
      </div>
      <div
        onClick={() => {
          setOpenUserInfo(false);
          setSwitchField("Community");
        }}
        className="pointer-events-none absolute right-30 top-17 transition-transform duration-200 hover:scale-110"
      >
        <div className="absolute left-23 font-bold">Coming Soon!</div>
        <img
          src={communityLogoBlock}
          alt="Community Logo"
          className="w-70 h-70"
        />
      </div>
    </div>
  );
}

export default UserFormInfo;
