import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAh5GapFdZUvX6G1FsB_XMW4o2P1fFzlvM",
    authDomain: "manager-app-510cf.firebaseapp.com",
    databaseURL: "https://manager-app-510cf.firebaseio.com",
    projectId: "manager-app-510cf",
    storageBucket: "manager-app-510cf.appspot.com",
    messagingSenderId: "232907995260",
    appId: "1:232907995260:web:190bf9e12fc868430d71f9",
    measurementId: "G-Y6H4HMY34M"
  };
  
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();


const db = firebase.firestore();
const storage = firebase.storage();

export {
    db,
    storage, 
    firebase
}