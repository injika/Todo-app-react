// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// Required for side-effects
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRuKP7ybTBXCD-u29gQpf33qjdykcwbm0",
  authDomain: "todo-app-4aba0.firebaseapp.com",
  projectId: "todo-app-4aba0",
  storageBucket: "todo-app-4aba0.appspot.com",
  messagingSenderId: "284040142596",
  appId: "1:284040142596:web:77b9481293064601d3ba51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)