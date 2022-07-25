// import * as firebase from 'firebase/app';
// import 'firebase/storage';
// import 'firebase/firestore';

// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import firebase from "firebase/app";
// import "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDTjuDgzGZw7DCH0FlmMI4tkoF6I9PRbt4",
  authDomain: "sample-b6585.firebaseapp.com",
  projectId: "sample-b6585",
  storageBucket: "sample-b6585.appspot.com",
  messagingSenderId: "344298728917",
  appId: "1:344298728917:web:12b499d70c15a750c6a15c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };