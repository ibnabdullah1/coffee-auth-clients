// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFE4vg430vu-D59V9Q-D6--uJvkDrKUB4",
  authDomain: "coffee-store-auth.firebaseapp.com",
  projectId: "coffee-store-auth",
  storageBucket: "coffee-store-auth.appspot.com",
  messagingSenderId: "371246686545",
  appId: "1:371246686545:web:12b296c6c788c65b74f370",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
