// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBghYLgbO8bKsnQd6sBKo3gSXYHST1xIiw",
  authDomain: "netflix-gpt-cb7c3.firebaseapp.com",
  projectId: "netflix-gpt-cb7c3",
  storageBucket: "netflix-gpt-cb7c3.firebasestorage.app",
  messagingSenderId: "1065155415159",
  appId: "1:1065155415159:web:8f1059998ad21783758a72",
  measurementId: "G-Y4RYDK4N1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
