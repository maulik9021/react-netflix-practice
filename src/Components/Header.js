import React from "react";
import usericon from "../../src/UserIcon.png";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {

    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <>
      <div className="absolute z-10 w-screen px-8 py-2 bg-gradient-to-b from-black flex">
        <img
          className="w-48"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />
      </div>
      <div className="flex p-4 justify-end cursor-pointer">
        <img className="w-10 h-10 z-20" src={usericon} alt="user-icon" />
        <button className="font-bold text-white z-20" onClick={handleSignOut}>"SignOut"</button>
      </div>
    </>
  );
};

export default Header;
