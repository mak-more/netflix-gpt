// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMfXXYPcaZlMDQ7fpAiXxME8yCV4NnZEM",
  authDomain: "netflixgpt-f1409.firebaseapp.com",
  projectId: "netflixgpt-f1409",
  storageBucket: "netflixgpt-f1409.appspot.com",
  messagingSenderId: "39975231371",
  appId: "1:39975231371:web:c5208b422a5d912e52d98e",
  measurementId: "G-WPF5RNV7YP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);