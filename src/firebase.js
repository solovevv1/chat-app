// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2A4cBg7Cf3CRdu4a8_-Dk_w7LkKu74HA",
  authDomain: "chat-app-f4c4e.firebaseapp.com",
  projectId: "chat-app-f4c4e",
  storageBucket: "chat-app-f4c4e.appspot.com",
  messagingSenderId: "1097327081294",
  appId: "1:1097327081294:web:99c994d86ce7c51359d01f",
  measurementId: "G-JTQVLXWN5J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
// const analytics = getAnalytics(app);