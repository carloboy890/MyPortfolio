import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FreeCommentLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/FreeComment.svg";

function FreeCommentAppCardStyle({ isMd }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`relative cursor-pointer flex card2 transform transition-all duration-500 justify-center items-center
          max-lg:left-35
          ${isMd ? "!h-25 max-md:left-0 !w-25" : "hover:scale-110 !w-14 !h-14 left-50 !rounded-xl"}`}
        onClick={() => navigate("/freeCommentApp")}
      >
        <img src={FreeCommentLogo} alt="Comment logo" className="w-[60%]" />
      </div>
    </>
  );
}

export default FreeCommentAppCardStyle;
