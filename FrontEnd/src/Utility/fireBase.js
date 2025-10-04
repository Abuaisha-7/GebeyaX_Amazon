
import firebase from "firebase/compat/app";
// auth
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbuVIgq13HyPM5Q-dYzhLnvyR5DOUSHrI",
  authDomain: "clone-eaa8a.firebaseapp.com",
  projectId: "clone-eaa8a",
  storageBucket: "clone-eaa8a.appspot.com",
  messagingSenderId: "394215927337",
  appId: "1:394215927337:web:3c952d706a93c777b17638"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();