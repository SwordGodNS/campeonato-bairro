// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbGhkFdjwA-Hz6QIi_D04kCB_HBCUF4LY",
  authDomain: "campeonato-bairro-f1b14.firebaseapp.com",
  projectId: "campeonato-bairro-f1b14",
  storageBucket: "campeonato-bairro-f1b14.firebasestorage.app",
  messagingSenderId: "107353619301",
  appId: "1:107353619301:web:ae1fbeb3a5068248167f8c",
  measurementId: "G-7SJKYVL947"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);