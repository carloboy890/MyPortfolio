import React from "react";
import styles from "./LoginInfo.module.css";

function CommentAppUsername({
  username,
  setUsername,
  regCodeErrorMess,
  regSuccess,
  errorMessSwitch,
  switchField,
  logSuccess,
  loginCodeErrorMess,
}) {
  return (
    <div
      className=" h-30 flex flex-col text-center 
    max-xl:h-26
    max-lg:h-23
    max-sm:h-20 max-sm:items-center"
    >
      <div className="flex flex-col justify-between h-full">
        <p
          className="text-3xl font-Coiny font-bold 
        max-xl:text-2xl 
        max-lg:text-xl
        max-sm:text-lg"
        >
          Type Your Username :
        </p>
        <p className=" text-center text-red-700 max-sm:text-[0.6rem]">
          {switchField === "Register" &&
            (errorMessSwitch ? regSuccess : regCodeErrorMess)}
          {switchField === "Login" &&
            (errorMessSwitch ? logSuccess : loginCodeErrorMess)}
        </p>
      </div>
      <input
        type="text"
        value={username}
        className={`${styles.input} h-10 
        max-sm:h-6 max-sm:!w-[80%]`}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
    </div>
  );
}

export default CommentAppUsername;
