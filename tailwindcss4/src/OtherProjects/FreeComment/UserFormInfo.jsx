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
    max-sm:bottom-0 max-sm:left-0 max-sm:w-full max-sm:h-full max-sm:justify-center max-sm:items-center "
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
        className="pointer-events-none transition-transform duration-200 hover:scale-110 max-sm:flex max-sm:flex-col relative"
      >
        <div
          className="absolute text-sm right-14 -top-1 font-bold
          max-2xl:right-14
        max-xl:-top-1 max-xl:text-[0.8rem] max-xl:right-10.5
        max-sm:right-10.5 max-sm:-top-1 max-sm:text-[0.8rem]"
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
