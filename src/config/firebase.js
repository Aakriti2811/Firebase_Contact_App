// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIq8EvYi-BdYBrZaWQG-Hs2dJUk-k4BJ0",
  authDomain: "vite-contact-f712a.firebaseapp.com",
  projectId: "vite-contact-f712a",
  storageBucket: "vite-contact-f712a.appspot.com",
  messagingSenderId: "164003881821",
  appId: "1:164003881821:web:e3e235c86bc09fef3e3eb4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);