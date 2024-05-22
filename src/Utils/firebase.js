// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADbQY9BEpDVTtBap4mLCX9roJjJUMdgVw",
  authDomain: "netflixgpt-9b8cd.firebaseapp.com",
  projectId: "netflixgpt-9b8cd",
  storageBucket: "netflixgpt-9b8cd.appspot.com",
  messagingSenderId: "443469755829",
  appId: "1:443469755829:web:6a278f70006f17111dd5fc",
  measurementId: "G-1E3RNNCHN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);