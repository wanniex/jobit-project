import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkf2_2OF2QlZd3c07jovOjVD-mc2sI9P8",
    authDomain: "jobit-1e302.firebaseapp.com",
    projectId: "jobit-1e302",
    storageBucket: "jobit-1e302.appspot.com",
    messagingSenderId: "291901227772",
    appId: "1:291901227772:web:69bcaf567f927fed75cd79",
    measurementId: "G-MJWR8R96PJ"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;