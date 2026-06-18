import React from "react";
import commentAppCloudFog from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/commentAppBGFolder/commentAppCloudFog.svg";
import commentAppGrass from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/commentAppBGFolder/commentAppGrass.svg";
import commentAppHuman from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/commentAppBGFolder/commentAppHuman.svg";
import commentAppMountainWhite from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/commentAppBGFolder/commentAppMountainWhite.svg";
import commentAppSun from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/commentAppBGFolder/commentAppSun.svg";
import commentAppTree from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/commentAppBGFolder/commentAppTree.svg";

function FreeCommentBG({ children }) {
  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-[#fff]  
  "
    >
      <div
        className="absolute top-10 left-0 
      max-2xl:top-40"
      >
        <img src={commentAppCloudFog} alt="" className="w-600" />
      </div>
      <div
        className="absolute top-10 left-0 
      max-2xl:top-40 max-sm:top-140"
      >
        <img
          src={commentAppCloudFog}
          alt=""
          className="w-600 hidden max-sm:block "
        />
      </div>
      <div className="absolute bottom-0 left-80 max-lg:left-60">
        <img
          src={commentAppGrass}
          alt=""
          className="w-150 
          max-2xl:w-120 
          max-xl:w-80
          max-lg:w-70
          max-sm:hidden"
        />
      </div>
      <div
        className="absolute bottom-10 left-160 
      max-2xl:left-155
      max-xl:left-125 max-xl:bottom-5
      max-lg:left-110
       max-sm:left-100"
      >
        <img
          src={commentAppHuman}
          alt=""
          className="w-25 
          max-2xl:w-23 
          max-xl:w-20
          max-lg:w-17
          max-md:hidden"
        />
      </div>
      <div className="absolute -bottom-40 -left-18">
        <img
          src={commentAppMountainWhite}
          alt=""
          className="max-2xl:w-110 
        max-xl:w-95
        max-lg:w-80 
        max-sm:w-200"
        />
      </div>
      <div
        className="absolute -top-40 -left-40 
      max-xl:-left-35"
      >
        <img
          src={commentAppSun}
          alt=""
          className="h-100
        max-xl:w-80"
        />
      </div>
      <div className="absolute bottom-0 -right-10">
        <img
          src={commentAppTree}
          alt=""
          className="w-170
        max-2xl:w-140 
        max-xl:w-105
        max-lg:w-80"
        />
      </div>
      {children}
    </div>
  );
}

export default FreeCommentBG;
