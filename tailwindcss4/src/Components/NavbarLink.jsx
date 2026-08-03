import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa6";
import { FaFile } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";

function NavbarLink({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }) {
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <ul
        className="z-50 text-shadow-lg/30 justify-end list-none font-[500] flex space-x-20 text-[1.2rem] items-center rounded-4xl p-5 bg-[#242424]/80
      max-w-screen-2xl
      max-2xl:text-[1.2rem] max-2xl:max-w-screen-xl
      max-xl:justify-center max-xl:text-[1.1rem] max-xl:max-w-screen-lg
      max-lg:max-w-screen-md
      max-md:hidden max-md:max-w-screen-sm"
      >
        <li className="fade-cont">
          <button
            onClick={() => scrollToSection(homeRef)}
            className="inline-block cursor-pointer"
          >
            <span className="fade text-white">Home</span>
          </button>
        </li>
        <li className="fade-cont">
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="inline-block cursor-pointer"
          >
            <span className="fade text-white">About</span>
          </button>
        </li>
        <li className="fade-cont">
          <button
            onClick={() => scrollToSection(projectsRef)}
            className="inline-block cursor-pointer"
          >
            <span className="fade text-white">Projects</span>
          </button>
        </li>
        <li className="fade-cont">
          <button
            onClick={() => scrollToSection(skillsRef)}
            className="inline-block cursor-pointer"
          >
            <span className="fade text-white">Skills</span>
          </button>
        </li>
        <li className="fade-cont">
          <button
            onClick={() => scrollToSection(contactRef)}
            className="inline-block cursor-pointer"
          >
            <span className="fade text-white">Contact</span>
            <span className="line absolute left-0 -bottom-1 h-[2px] bg-white"></span>
          </button>
        </li>
      </ul>
      <ul className="max-md:flex max-md:w-3/4 max-md:h-16 max-md:justify-between max-md:rounded-3xl max-md:bg-[#242424]/60 hidden max-sm:h-auto max-sm:w-full">
        <li className="max-md:w-full max-md:flex max-md:justify-center max-md:items-center">
          <button onClick={() => scrollToSection(homeRef)}>
            <FaHouse className="invisible max-md:visible max-md:h-[20px] max-md:w-[20px] cursor-pointer" />
          </button>
        </li>
        <li className="max-md:w-full max-md:flex max-md:justify-center max-md:items-center">
          <button onClick={() => scrollToSection(aboutRef)}>
            <FaUser className="invisible max-md:visible max-md:h-[20px] max-md:w-[20px] cursor-pointer" />
          </button>
        </li>
        <li className="max-md:w-full max-md:flex max-md:justify-center max-md:items-center">
          <button onClick={() => scrollToSection(projectsRef)}>
            <FaFolder className="invisible max-md:visible max-md:h-[20px] max-md:w-[20px] cursor-pointer" />
          </button>
        </li>
        <li className="max-md:w-full max-md:flex max-md:justify-center max-md:items-center">
          <button onClick={() => scrollToSection(skillsRef)}>
            <FaFile className="invisible max-md:visible max-md:h-[20px] max-md:w-[20px] cursor-pointer" />
          </button>
        </li>
        <li className="max-md:w-full max-md:flex max-md:justify-center max-md:items-center">
          <button onClick={() => scrollToSection(contactRef)}>
            <FaAddressBook className="invisible max-md:visible max-md:h-[20px] max-md:w-[20px] cursor-pointer" />
          </button>
        </li>
      </ul>
    </>
  );
}

export default NavbarLink;
