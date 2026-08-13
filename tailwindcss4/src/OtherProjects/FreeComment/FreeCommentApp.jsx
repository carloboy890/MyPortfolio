import React, { useState, useEffect, createContext } from "react";
import BackButtonAnimation from "../../Components/BackButtonAnimation";
import FreeCommentBG from "./FreeCommentBG";
import chatConvoLogo from "../../assets/ProjectsLogos/OtherProjectsSVG/CommentAppWallpaper/chatConvoLogo.svg";
import CommentInfoField from "./CommentInfoField";
import UserFormInfo from "./UserFormInfo";
import ChatField from "./ChatField";
import AskMeChatField from "./AskMeChatField";
import CommunityChatField from "./CommunityChatField";
import PickGender from "./PickGender";

export const UsernameContext = createContext();

function FreeCommentApp() {
  const [switchField, setSwitchField] = useState("");
  const [openUserInfo, setOpenUserInfo] = useState(true);
  const [hideUserInfo, setHideUserInfo] = useState(true);
  const [passedUsername, setPassedUsername] = useState("");
  const [passedAdminUsername, setPassedAdminUsername] = useState("");
  const [toGender, setToGender] = useState(false);
  const [checkingGender, setCheckingGender] = useState(true);
  const [genderChecked, setGenderChecked] = useState(false);
  const [isGender, setIsGender] = useState("");

  useEffect(() => {
    const lastActivity = Number(localStorage.getItem("lastActivity"));

    const THIRTY_MINUTES = 30 * 60 * 1000;

    if (lastActivity && Date.now() - lastActivity > THIRTY_MINUTES) {
      localStorage.removeItem("user");
      localStorage.removeItem("admin");
      localStorage.removeItem("switchField");
      localStorage.removeItem("lastActivity");

      return;
    }

    const savedUsername = localStorage.getItem("user");
    const savedAdminUsername = localStorage.getItem("admin");
    const savedSwitchField = localStorage.getItem("switchField");

    if (savedUsername) {
      const user = JSON.parse(savedUsername);
      setPassedUsername(user.username);
      setHideUserInfo(false);
    }

    if (savedAdminUsername) {
      const admin = JSON.parse(savedAdminUsername);
      setPassedAdminUsername(admin.username);
      setHideUserInfo(false);
    }

    if (savedSwitchField) {
      setSwitchField(savedSwitchField);
    }
  }, []);

  useEffect(() => {
    const THIRTY_MINUTES = 30 * 60 * 1000;

    const interval = setInterval(() => {
      const lastActivity = Number(localStorage.getItem("lastActivity"));

      if (lastActivity && Date.now() - lastActivity > THIRTY_MINUTES) {
        handleLogOut();
      }
    }, 60000); // every minute

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!passedUsername) return;

    const fetchUser = async () => {
      setGenderChecked(false);
      setCheckingGender(true);

      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/get-user?username=${passedUsername}`,
        );
        const data = await res.json();

        if (data.user?.gender) {
          setIsGender(data.user.gender);
          setToGender(false); // skip selection
        } else {
          setToGender(true); // show selection
        }

        console.log(data.user?.gender);
      } catch (err) {
        console.error(err);
      } finally {
        setCheckingGender(false);
        setGenderChecked(true);
      }
    };

    if (passedUsername) {
      fetchUser();
    }
  }, [passedUsername]);

  function handleLogOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
    localStorage.removeItem("switchField");
    localStorage.removeItem("lastActivity");

    setPassedUsername("");
    setPassedAdminUsername("");
    setSwitchField("");
    setHideUserInfo(true);
    setOpenUserInfo(true);
  }

  useEffect(() => {
    const updateActivity = () => {
      localStorage.setItem("lastActivity", Date.now());
    };

    updateActivity();

    const events = ["click", "mousemove", "keydown", "scroll", "touchstart"];

    events.forEach((event) => window.addEventListener(event, updateActivity));

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, updateActivity),
      );
    };
  }, []);

  return (
    <FreeCommentBG>
      <div className="relative h-full">
        {hideUserInfo ? (
          <div
            className="absolute w-210 flex flex-col justify-around h-full
          max-2xl:top-7 
          max-xl:top-22
          max-lg:top-35
          max-md:top-0 max-md:w-full
          z
          "
          >
            <div
              className="absolute flex w-150 left-25 
            max-2xl:w-145
            max-xl:w-120 max-xl:left-25 
            max-lg:left-5
            max-md:w-full max-md:left-0 max-md:h-full
            max-sm:left-0 max-sm:h-full max-sm:w-full
             
            "
            >
              <img
                src={chatConvoLogo}
                alt="chatConvoLogo"
                className=" w-150 mt-5 max-lg:w-120 
                max-md:hidden"
              />
              {openUserInfo ? (
                <UserFormInfo
                  setOpenUserInfo={setOpenUserInfo}
                  setSwitchField={setSwitchField}
                />
              ) : (
                <CommentInfoField
                  setHideUserInfo={setHideUserInfo}
                  setPassedUsername={setPassedUsername}
                  setPassedAdminUsername={setPassedAdminUsername}
                  setToGender={setToGender}
                  setCheckingGender={setCheckingGender}
                  setOpenUserInfo={setOpenUserInfo}
                />
              )}
            </div>
          </div>
        ) : toGender ? (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <PickGender
              setIsGender={setIsGender}
              setToGender={setToGender}
              setCheckingGender={setCheckingGender}
              passedUsername={passedUsername}
            />
          </div>
        ) : (
          <UsernameContext.Provider
            value={{
              passedAdminUsername,
              passedUsername,
              switchField,
              toGender,
              setToGender,
              setCheckingGender,
              checkingGender,
              isGender,
              setIsGender,
              handleLogOut,
            }}
          >
            <ChatField />
          </UsernameContext.Provider>
        )}
      </div>
    </FreeCommentBG>
  );
}

export default FreeCommentApp;
