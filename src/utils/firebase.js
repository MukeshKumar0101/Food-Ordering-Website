// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1fMVstxgye-7aYy6-ODGNgqsjhljHDao",
  authDomain: "food-ordering-web-8e333.firebaseapp.com",
  projectId: "food-ordering-web-8e333",
  storageBucket: "food-ordering-web-8e333.firebasestorage.app",
  messagingSenderId: "804903631826",
  appId: "1:804903631826:web:6e22cf74bbdc49f1ff260b",
  measurementId: "G-ZT3469K45G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();