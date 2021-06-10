
import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAzBhbUGttVTAzmhpCwT4OuKLJvUuNGN-M",
    authDomain: "mcity-53209.firebaseapp.com",
    projectId: "mcity-53209",
    storageBucket: "mcity-53209.appspot.com",
    messagingSenderId: "212658402679",
    appId: "1:212658402679:web:60a07bc5e484e21e5a1d72",
    measurementId: "G-75FZ7PE4B6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export {
      firebase
  }