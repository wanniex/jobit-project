import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtr6cQZ-bMR-dibwF9m6eE3oS9Gc9S3b4",
  authDomain: "jobit-38c72.firebaseapp.com",
  projectId: "jobit-38c72",
  storageBucket: "jobit-38c72.appspot.com",
  messagingSenderId: "407951507326",
  appId: "1:407951507326:web:18f29a4c16508568d07d2f",
  measurementId: "G-W1SZ08LYHH"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export default auth;
// var database = firebase.firestore();
// export default database;