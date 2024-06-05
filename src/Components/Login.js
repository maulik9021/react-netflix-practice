import React, { useRef, useState } from "react";
import Header from './Header';
import { netflix_background } from "../Utils/constants";
import { checkValidData } from "../Utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {

      //SignUp Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/47742056?v=4"
          }).then(() => {

            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL
            }));

            navigate("/browse");
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {

      //SignIn Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={netflix_background} alt="netflix-background" />
      </div>

      <form onSubmit={(e) => { e.preventDefault() }} className="absolute w-3/12 text-center p-12 bg-black bg-opacity-75 mx-auto my-24 right-0 left-1">

        <h1 className="p-2 my-2 font-bold text-3xl mb-2 text-white text-left ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && <input
          ref={name}
          type="text"
          placeholder="Enter Full Name"
          className="p-4 my-4 w-full mb-3 relative rounded text-white border bg-transparent border-slate-400"
        />}

        <input
          ref={email}
          type="text"
          placeholder="Enter Email Address"
          className="p-4 my-4 w-full mb-3 relative rounded text-white border bg-transparent border-slate-400"
        />

        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          className="p-4 my-4 w-full mb-6 relative rounded text-white bg-transparent border border-slate-300"
        />

        <p className="text-red-700 text-left p-2 font-bold">{errorMessage}</p>

        <button className="p-2 my-2 w-full bg-red-600 font-bold relative rounded text-white cursor-pointer" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* isSignInForm && <p className="w-full bg-transparent relative rounded text-gray-400">
          OR
        </p> */}

        {/* isSignInForm && <button className="p-2 my-2 w-full bg-opacity-75 bg-zinc-500 font-bold relative rounded text-white cursor-pointer">
          Use a Sign-In Code
        </button> */}

        <p className="p-2 my-2 text-white cursor-pointer">Forgot Password?</p>

        <div className="flex">
          <input type="checkbox" className="mr-2 w-5 h-5 cursor-pointer" />

          <p className=" text-white text-left text-lg">
            Remember me
          </p>
        </div>

        <p className="mt-2 text-left text-gray-400 mb-6">
          {isSignInForm ? "New to Netflix?" : "Already Registered!!"}
          <span
            className="text-white ml-2 cursor-pointer border-b-2"
            onClick={toggleSignUpForm}
          >
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
