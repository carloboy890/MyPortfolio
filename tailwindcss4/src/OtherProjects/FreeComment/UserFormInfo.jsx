import React, { createContext } from "react";
import askMeLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/askMeLogo.svg";
import communityLogoBlock from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/communityLogoBlock.svg";
import AskMeChatField from "./AskMeChatField";
import CommunityChatField from "./CommunityChatField";

export const SwitchContext = createContext();

function UserFormInfo({ setOpenUserInfo, setSwitchField }) {
  return (
    <div
      className="absolute flex left-14 items-center w-3/4 h-85 justify-center 
    max-xl:-bottom-5 
    max-lg:-bottom-5
    max-sm:-bottom-5"
    >
      <div
        onClick={() => {
          setOpenUserInfo(false);
          setSwitchField("AskMe");
        }}
        className="transition-transform duration-200 hover:scale-110"
      >
        <img
          src={askMeLogo}
          alt="Ask Me"
          className="w-50 h-50 
          max-xl:w-40 max-xl:h-40 
          max-sm:w-40 max-sm:h-40 cursor-pointer"
        />
      </div>
      <div
        onClick={() => {
          setOpenUserInfo(false);
          setSwitchField("Community");
        }}
        className="pointer-events-none transition-transform duration-200 hover:scale-110"
      >
        <div
          className="absolute text-sm right-20 top-15 font-bold
          max-2xl:right-18
        max-xl:top-20 max-xl:text-[0.8rem] max-xl:right-15
        max-sm:right-15 max-sm:top-20 max-sm:text-[0.8rem]"
        >
          Coming Soon!
        </div>
        <img
          src={communityLogoBlock}
          alt="Community Logo"
          className="w-50 h-50 
          max-xl:w-40 max-xl:h-40 
          max-sm:w-40 max-sm:h-40"
        />
      </div>
    </div>
  );
}

export default UserFormInfo;
