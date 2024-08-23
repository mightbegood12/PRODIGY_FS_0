// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-b80bd.firebaseapp.com",
  projectId: "mern-auth-b80bd",
  storageBucket: "mern-auth-b80bd.appspot.com",
  messagingSenderId: "652478100445",
  appId: "1:652478100445:web:f2a6ab936906d4ec7a7c34",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
