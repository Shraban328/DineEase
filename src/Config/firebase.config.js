// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxjthxfhShgpsfSXe0Oh7AYJd3xdTwSNc",
  authDomain: "dine-ease-e3120.firebaseapp.com",
  projectId: "dine-ease-e3120",
  storageBucket: "dine-ease-e3120.appspot.com",
  messagingSenderId: "446292388271",
  appId: "1:446292388271:web:2d487ce4a0f6b45026a75a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
