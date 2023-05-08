// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqKjdvVhf3-nDIxKxdLzRN1MVe0gW6PeA",
  authDomain: "agentepatita-31447.firebaseapp.com",
  projectId: "agentepatita-31447",
  storageBucket: "agentepatita-31447.appspot.com",
  messagingSenderId: "1005207635997",
  appId: "1:1005207635997:web:8203a5553c65cbb24adef4",
//   measurementId: "G-1YMNVYLTT0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    auth,
    db
};

