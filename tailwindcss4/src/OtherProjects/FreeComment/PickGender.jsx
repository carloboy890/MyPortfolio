import React, { useState } from "react";
import maleProfile from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/maleProfile.svg";
import femaleProfile from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/femaleProfile.svg";

function PickGender({
  setToGender,
  setIsGender,
  passedUsername,
  setCheckingGender,
}) {
  console.log("SENDING TO DB:", passedUsername);

  const handleGenderSelect = async (gender) => {
    setIsGender(gender);
    setToGender(false);
    setCheckingGender(false);

    await fetch(`${import.meta.env.VITE_API_URL}/set-gender`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: passedUsername,
        gender,
      }),
    });
  };

  return (
    <div className="h-full w-full flex">
      <div className="h-80 w-130 flex items-center rounded-4xl mx-auto my-auto bg-amber-100">
        <div className="w-1/2 h-60 items-center flex justify-center">
          <img
            onClick={() => handleGenderSelect("Female")}
            src={femaleProfile}
            alt="Female Profile"
            className="h-50 cursor-pointer hover:scale-110 duration-100 ease-in"
          />
        </div>
        <div className="w-1/2 h-60 items-center flex justify-center">
          <img
            onClick={() => handleGenderSelect("Male")}
            src={maleProfile}
            alt="Male Profile"
            className="h-50 cursor-pointer hover:scale-110 duration-100 ease-in"
          />
        </div>
      </div>
    </div>
  );
}

export default PickGender;
