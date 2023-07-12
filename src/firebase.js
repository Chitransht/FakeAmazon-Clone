// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDtpzM1GQFuEjF0rm9wRWFWZ42lFEZdMi8",
  authDomain: "clone-490a2.firebaseapp.com",
  projectId: "clone-490a2",
  storageBucket: "clone-490a2.appspot.com",
  messagingSenderId: "77509183587",
  appId: "1:77509183587:web:fb7943267cba55b46f9056",
  measurementId: "G-DP5Y7BVCST",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };