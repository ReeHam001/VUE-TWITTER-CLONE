// Import the functions you need from the SDKs you need
import firebase from "firebase/app"
import "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX1AX48kwwiTU4WFKuxW4vvML9rK0sGxg",
  authDomain: "qwitter-80ec0.firebaseapp.com",
  projectId: "qwitter-80ec0",
  storageBucket: "qwitter-80ec0.appspot.com",
  messagingSenderId: "246908915991",
  appId: "1:246908915991:web:874f2a0d4a573e7a582752"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default db;