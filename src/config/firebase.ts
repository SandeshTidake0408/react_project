// Import the functions you need from the SDKs you need
import exp from "constants";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANUmFy8QYOfU-MwQ6UGEamKloocpwlj3I",
    authDomain: "react-demo-project-b912f.firebaseapp.com",
    projectId: "react-demo-project-b912f",
    storageBucket: "react-demo-project-b912f.appspot.com",
    messagingSenderId: "178955096185",
    appId: "1:178955096185:web:cf4b0a889cdc19845a04a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
