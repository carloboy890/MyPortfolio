import React, { useState } from "react";
import RegistrationField from "./Registration/RegistrationField";
import LoginInfo from "./Login/LoginInfo";
import AdminLoginInfo from "./Login/adminLoginInfo";
import ChatField from "./ChatField";
import backButton from "../../assets/ProjectsLogos/OtherProjectsSVG/BackArrowWeatherApp.svg";
import { useNavigate } from "react-router-dom";

function CommentInfoField({
  setHideUserInfo,
  setPassedUsername,
  setPassedAdminUsername,
  setToGender,
  setCheckingGender,
  setOpenUserInfo,
}) {
  const navigate = useNavigate();
  const [switchField, setSwitchField] = useState("");
  const [hideInfoField, setHideInfoField] = useState(true);
  const [hideBackButton, setHideBackButton] = useState(true);

  return (
    <>
      {hideInfoField && (
        <div
          className="h-full absolute flex justify-center items-center z-20 space-x-4 w-full
        max-lg:w-120
        max-sm:h-70 max-sm:w-120 max-sm:space-x-2"
        >
          <div className="z-21 absolute left-10 top-8">
            <img
              onClick={() => setOpenUserInfo(true)}
              src={backButton}
              alt="Back Button"
              className="h-15 w-15 cursor-pointer transition duration-150 hover:scale-110 
              max-lg:h-12 max-lg:w-12
              max-sm:h-12 max-sm:w-12"
            />
          </div>
          <button
            onClick={() => {
              setHideInfoField(false);
              setSwitchField("Register");
              setHideBackButton(true);
            }}
            className="bg-amber-100 font-Coiny text-2xl rounded-3xl h-20 w-40 text-black px-4 py-2 transition duration-150 hover:bg-red-600 active:scale-95 z-10 cursor-pointer 
            max-xl:h-15 max-xl:w-32 max-xl:text-[1.1rem]
           max-lg:w-30 max-lg:text-[1rem] 
           max-sm:w-30"
          >
            Register
          </button>
          <button
            onClick={() => {
              setHideInfoField(false);
              setSwitchField("Login");
              setHideBackButton(true);
            }}
            className="bg-amber-100 font-Coiny text-2xl rounded-3xl h-20 w-40 text-black px-4 py-2 transition duration-150 hover:bg-red-600 active:scale-95 z-10 cursor-pointer 
            max-xl:h-15 max-xl:w-32 max-xl:text-[1.1rem]
           max-lg:w-30 max-lg:text-[1rem] 
           max-sm:w-30"
          >
            Login
          </button>
          <button
            onClick={() => {
              setHideInfoField(false);
              setSwitchField("AdminLogin");
              setHideBackButton(true);
            }}
            className="bg-amber-100 font-Coiny text-2xl rounded-3xl h-20 w-40 text-black px-4 py-2 transition duration-150 hover:bg-red-600 active:scale-95 z-10 cursor-pointer 
            max-xl:h-15 max-xl:w-32 max-xl:text-[1.1rem]
            max-lg:w-32 max-lg:text-[1rem] 
            max-sm:text-[1rem]"
          >
            Admin Login
          </button>
        </div>
      )}

      {switchField === "Register" && !hideInfoField && (
        <RegistrationField
          setHideUserInfo={setHideUserInfo}
          setHideInfoField={setHideInfoField}
          hideInfoField={hideInfoField}
          switchField={switchField}
          setHideBackButton={setHideBackButton}
          hideBackButton={hideBackButton}
        />
      )}
      {switchField === "Login" && !hideInfoField && (
        <LoginInfo
          setHideUserInfo={setHideUserInfo}
          setHideInfoField={setHideInfoField}
          switchField={switchField}
          hideInfoField={hideInfoField}
          setPassedUsername={setPassedUsername}
          setToGender={setToGender}
          setCheckingGender={setCheckingGender}
          setHideBackButton={setHideBackButton}
          hideBackButton={hideBackButton}
        />
      )}
      {switchField === "AdminLogin" && !hideInfoField && (
        <AdminLoginInfo
          setHideUserInfo={setHideUserInfo}
          setHideInfoField={setHideInfoField}
          switchField={switchField}
          setPassedAdminUsername={setPassedAdminUsername}
          setToGender={setToGender}
          setHideBackButton={setHideBackButton}
          hideBackButton={hideBackButton}
        />
      )}
    </>
  );
}

export default CommentInfoField;
