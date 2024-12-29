// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRXCPLaJwo4LZqd4z1Rn6aBOZgdErsRpQ",
  authDomain: "restaurantmanagement-584f9.firebaseapp.com",
  projectId: "restaurantmanagement-584f9",
  storageBucket: "restaurantmanagement-584f9.firebasestorage.app",
  messagingSenderId: "1047098751818",
  appId: "1:1047098751818:web:cc6717208809942a491fb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);