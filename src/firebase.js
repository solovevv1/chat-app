// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDWHKR1Y07Jwo1tXCWMMwZTC1H3HXN79L8",
  authDomain: "chat-app-8d94d.firebaseapp.com",
  projectId: "chat-app-8d94d",
  storageBucket: "chat-app-8d94d.appspot.com",
  messagingSenderId: "1063785964103",
  appId: "1:1063785964103:web:2f960c66d58d5c214bc762"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
// const analytics = getAnalytics(app);