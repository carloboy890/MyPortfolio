import React from "react";

function ContactSM(props) {
  return (
    <>
      <div
        className="relative w-13 flex z-4 justify-center
        "
      >
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="border-3 h-8.5 flex w-8.5 rounded-full hover:scale-110 hover:shadow-lg hover:shadow-[#2dd4bf] transition duration-300 ease-in-out cursor-pointer  border-[#22d3ee]"
        >
          <img
            src={props.logo}
            alt="facebookLogo"
            className={`w-[100%]
        ${props.isId2 ? "scale-150" : ""}`}
          />
        </a>
      </div>
    </>
  );
}

export default ContactSM;
