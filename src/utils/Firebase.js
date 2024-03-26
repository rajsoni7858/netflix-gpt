// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1C3LYxqMw1sfGfmCA2EUv64K76wjpMr8",
  authDomain: "netflixgpt-2be98.firebaseapp.com",
  projectId: "netflixgpt-2be98",
  storageBucket: "netflixgpt-2be98.appspot.com",
  messagingSenderId: "1026105655748",
  appId: "1:1026105655748:web:76f805ecbdee2d22e1a491",
  measurementId: "G-DBJLKRS2WG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
