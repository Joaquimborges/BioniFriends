import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCX39KIIHRS2U5JwIGXtObW7ILJSCKGxto",
    authDomain: "bionicfriends-9591a.firebaseapp.com",
    projectId: "bionicfriends-9591a",
    storageBucket: "bionicfriends-9591a.appspot.com",
    messagingSenderId: "699681210772",
    appId: "1:699681210772:web:0a66cfe9044e47fc9b0f81",
    measurementId: "G-VWBJMKK3T9"
};


try {
    firebase.initializeApp(firebaseConfig);
} catch(err){
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
}

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.Timestamp.now();

export { projectStorage, projectFirestore, timestamp };