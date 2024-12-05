// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARiFPQMwX2IU74eXUWViz-GSCsxlIA6TM",
  authDomain: "sistemassd-app.firebaseapp.com",
  projectId: "sistemassd-app",
  storageBucket: "sistemassd-app.firebasestorage.app",
  messagingSenderId: "529491657971",
  appId: "1:529491657971:web:e0779f53976d038f12e386",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
