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

  return (
    <FreeCommentBG>
      {hideUserInfo ? (
        <div className="">
          <div className="relative top-65 left-10 w-210 h-90 ">
            <img src={chatConvoLogo} alt="chatConvoLogo" className="absolute" />
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
          }}
        >
          <ChatField />
        </UsernameContext.Provider>
      )}
    </FreeCommentBG>
  );
}

export default FreeCommentApp;
