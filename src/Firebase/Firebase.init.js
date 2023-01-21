// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPugk_DB7ozSpF9G1LKtFK5rV44iDUWSY",
    authDomain: "genius-car-services-827eb.firebaseapp.com",
    projectId: "genius-car-services-827eb",
    storageBucket: "genius-car-services-827eb.appspot.com",
    messagingSenderId: "1011229390801",
    appId: "1:1011229390801:web:086c5f1dcac805510fd2f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;

