// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "caramel-candy-4eba7.firebaseapp.com",
    projectId: "caramel-candy-4eba7",
    storageBucket: "caramel-candy-4eba7.appspot.com",
    messagingSenderId: "184925114870",
    appId: "1:184925114870:web:09a2cc493f849c973277d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;

