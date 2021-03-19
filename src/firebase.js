import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAinUXH0C7jyMh2dG4cC8KpaK4M53znMk4",
    authDomain: "twitter-clone-417f0.firebaseapp.com",
    projectId: "twitter-clone-417f0",
    storageBucket: "twitter-clone-417f0.appspot.com",
    messagingSenderId: "612032039583",
    appId: "1:612032039583:web:a9505a8c34981a502b70aa",
    measurementId: "G-93D6L02ZW5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;