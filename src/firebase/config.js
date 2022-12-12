
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
// import '@firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBimxYT1KauS7v-h_ScrcxmRB00g8GhHvA",
  authDomain: "app-rn-dc327.firebaseapp.com",
  projectId: "app-rn-dc327",
  storageBucket: "app-rn-dc327.appspot.com",
  messagingSenderId: "793164509088",
  appId: "1:793164509088:web:ee0e563d41777e8e40fec5"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };