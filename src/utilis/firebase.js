// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeWmm0Kjy_LnDg9Hwdlua8l_YM3IUcYnA",
  authDomain: "netflixclone-410d6.firebaseapp.com",
  projectId: "netflixclone-410d6",
  storageBucket: "netflixclone-410d6.appspot.com",
  messagingSenderId: "155798919234",
  appId: "1:155798919234:web:76b44f05923297389735db",
  measurementId: "G-VK8LTVGGPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);