import firebase from "firebase";
//import firestore from 'firebase/firestore';

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyAXWxmkd9dEGpF3TCz27wt97oCUHGIo8og",
  authDomain: "vueeeeeeeee.firebaseapp.com",
  databaseURL: "https://vueeeeeeeee.firebaseio.com",
  projectId: "vueeeeeeeee",
  storageBucket: "vueeeeeeeee.appspot.com",
  messagingSenderId: "735264058294",
  appId: "1:735264058294:web:596d076518e10d73b0af17",
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

// utils
//const db = firebase.firestore();
//const auth = firebase.auth()

// collection references
//const msg = db.collection("messages");

// export utils/refs
//export { db, msg };
