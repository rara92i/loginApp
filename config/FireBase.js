// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrnFwW-Myd-jzTQRH3Jw-5_LLU5fQxUhM",
    authDomain: "login-fefb2.firebaseapp.com",
    projectId: "login-fefb2",
    storageBucket: "login-fefb2.appspot.com",
    messagingSenderId: "516203194099",
    appId: "1:516203194099:web:1f2b03990359b578ca7986"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);