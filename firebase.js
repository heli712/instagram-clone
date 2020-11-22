import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBJo8jontOnTjMj2Z_PfXnKlrYl49thSJ8",
  authDomain: "instagram-clone-e6b7a.firebaseapp.com",
  databaseURL: "https://instagram-clone-e6b7a.firebaseio.com",
  projectId: "instagram-clone-e6b7a",
  storageBucket: "instagram-clone-e6b7a.appspot.com",
  messagingSenderId: "778906772423",
  appId: "1:778906772423:web:2d706a9ebe13c9a2f3efe2",
  measurementId: "G-L8P21ERHRF",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
