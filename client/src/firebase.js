// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nestquest-b923e.firebaseapp.com",
  projectId: "nestquest-b923e",
  storageBucket: "nestquest-b923e.appspot.com",
  messagingSenderId: "288071051142",
  appId: "1:288071051142:web:ddb33b8d0c24f36163ae07",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
