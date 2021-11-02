import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVx-zVTAlfRAu8tOD6zNFCNXTUl9nymdM",
  authDomain: "royalmail-f88e5.firebaseapp.com",
  projectId: "royalmail-f88e5",
  storageBucket: "royalmail-f88e5.appspot.com",
  messagingSenderId: "424149900559",
  appId: "1:424149900559:web:c7503aa1e13e6a2972727a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
