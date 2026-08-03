import React from "react";

function MyExperienceCard({
  logo,
  title,
  desc1,
  desc2,
  desc3,
  desc4,
  newStyle = "",
}) {
  return (
    <div
      className="w-full h-full rounded-3xl
    p-5
    max-sm:p-3 flex flex-col items-center"
    >
      <div
        className="h-[25%] flex-1 flex
      max-xl:items-center
      max-sm:h-[15%]"
      >
        <div
          className="w-[30%] bg-white flex rounded-3xl p-4 items-center
          max-xl:h-[80%] 
          max-md:h-20
          "
        >
          <img src={logo} alt="UdemyLogo" />
        </div>
        <div
          className="w-[70%] flex items-center p-3 
        max-lg:text-[0.9rem] max-lg:p-2
        max-md:text-[1rem]
        max-sm:text-[0.8rem] font-bold"
        >
          <p>{title}</p>
        </div>
      </div>
      <div
        className="p-6 text-[0.9rem]
      max-lg:text-[0.8rem]
      max-md:text-[0.9rem] space-y-3
      max-sm:text-[0.7rem]"
      >
        <li>{desc1}</li>
        <li>{desc2}</li>
        <li>{desc3}</li>
        <li>{desc4}</li>
      </div>
    </div>
  );
}

export default MyExperienceCard;
