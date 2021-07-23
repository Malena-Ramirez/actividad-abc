import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCM8csZT7Ne3AdDGhSfPxNsL0A2-HD-lS8",
  authDomain: "actividad-abc.firebaseapp.com",
  projectId: "actividad-abc",
  storageBucket: "actividad-abc.appspot.com",
  messagingSenderId: "987744522049",
  appId: "1:987744522049:web:663914a86fcd6cbd0e1bc0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const google = new firebase.auth.GoogleAuthProvider();

export {
  db,
  google,
  firebase
}