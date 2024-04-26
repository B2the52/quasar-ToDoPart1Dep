import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYRDLH4M4p0QlYbNNbtZGX3Udt0j3AYLA",
  authDomain: "quasartodolist-52465.firebaseapp.com",
  projectId: "quasartodolist-52465",
  storageBucket: "quasartodolist-52465.appspot.com",
  messagingSenderId: "48732652083",
  appId: "1:48732652083:web:a256bf198f9e8569589946"
};
// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
