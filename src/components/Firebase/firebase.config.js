// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjVLICCpDbTNB4pXSWO1iV9KwkqvLpEs0",
  authDomain: "master-chef-bangladesh.firebaseapp.com",
  projectId: "master-chef-bangladesh",
  storageBucket: "master-chef-bangladesh.appspot.com",
  messagingSenderId: "280077640594",
  appId: "1:280077640594:web:4e18262015a5e1415fd74b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;