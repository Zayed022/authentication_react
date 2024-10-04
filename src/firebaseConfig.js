// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjK1Gh2zwFTwFdseqPIjkBi6JYPsEdRuI",
  authDomain: "authentication-app-bf844.firebaseapp.com",
  projectId: "authentication-app-bf844",
  storageBucket: "authentication-app-bf844.appspot.com",
  messagingSenderId: "17722085725",
  appId: "1:17722085725:web:191f952e59155c317d58b4",
  measurementId: "G-XVGVDH12JR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app)
