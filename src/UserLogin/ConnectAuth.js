 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9G5FBYpLINklGdXs-b2EymWPQVpBru6g",
  authDomain: "much-todo-dc.firebaseapp.com",
  projectId: "much-todo-dc",
  storageBucket: "much-todo-dc.appspot.com",
  messagingSenderId: "1088978193378",
  appId: "1:1088978193378:web:31e98d0ac3633fa56287bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);