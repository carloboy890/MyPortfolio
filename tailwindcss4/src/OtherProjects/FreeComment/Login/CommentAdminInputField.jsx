import React from "react";
import styles from "./LoginInfo.module.css";

function CommentAdminInputField({
  adminPassword,
  setAdminPassword,
  errorMessSwitch,
  switchField,
  adminUsername,
  setAdminUsername,
  adminLogSuccess,
  adminLoginCodeErrorMess,
}) {
  return (
    <>
      <div className="h-48 flex flex-col justify-end">
        <p className="text-md h-6 text-center text-red-700 max-sm:text-[0.7rem]">
          {errorMessSwitch ? adminLogSuccess : adminLoginCodeErrorMess}
        </p>
        <div className="flex flex-col items-end">
          <div
            className="space-y-1 h-18 
          max-xl:h-16"
          >
            <p
              className="text-sm text-center font-Coiny font-bold 
            max-xl:text-[0.8rem]"
            >
              Admin Username
            </p>

            <input
              type="text"
              value={adminUsername}
              className={`${styles.input} ${switchField === "AdminLogin" ? "h-8 max-xl:h-4" : ""}`}
              onChange={(e) => {
                setAdminUsername(e.target.value);
              }}
            />
          </div>
          <div
            className="space-y-1 h-18 
          max-xl:h-16"
          >
            <p
              className="text-sm text-center font-Coiny font-bold 
            max-xl:text-[0.8rem]"
            >
              Admin Password
            </p>
            <input
              type="password"
              value={adminPassword}
              className={`${styles.input} ${switchField === "AdminLogin" ? "h-8 max-xl:h-4" : ""}`}
              onChange={(e) => {
                setAdminPassword(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentAdminInputField;
