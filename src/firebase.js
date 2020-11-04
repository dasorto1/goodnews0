
import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyDBdRsopOO1kpWGuf8MJr4F2IJwUK4oEyg",
  authDomain: "enews-2f2ec.firebaseapp.com",
  databaseURL: "https://enews-2f2ec.firebaseio.com",
  projectId: "enews-2f2ec",
  storageBucket: "enews-2f2ec.appspot.com",
  messagingSenderId: "30537702790",
  appId: "1:30537702790:web:a4618c321fbe8e33e7a007"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();


export const auth = firebase.auth()
export const firestore = firebase.firestore
export default db;

