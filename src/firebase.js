import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "INSERT YOUR API KEY",
  authDomain: "INSERT YOUR AUTH DOMAIN",
  projectId: "INSERT YOUR PROJECT ID",
  storageBucket: "INSERT YOUR STORAGE BUCKET",
  messagingSenderId: "INSERT YOUR MESSAGING SENDER",
  appId: "INSERT YOUR APPLICATION ID",
  measurementId: "INSERT YOUR MEASUREMENT ID",
};
firebase.initializeApp(config);
export default firebase;
