import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { netflix_logo } from "../Utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="absolute z-10 w-screen px-8 py-2 bg-gradient-to-b from-black flex">
        <img
          className="w-48"
          src={netflix_logo}
          alt="netflix-logo" />
      </div>
      { user && (<div className="flex p-4 justify-end cursor-pointer">
        <img className="w-10 h-10 z-20 mr-2" src={user?.photoURL} alt="user-icon" />
        <button className="font-bold text-white z-20" onClick={handleSignOut}>SignOut</button>
      </div>
      )}
    </>
  );
};

export default Header;
