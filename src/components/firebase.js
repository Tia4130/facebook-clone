// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firestore from 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALZS_JiVktJdxURqgMPtY_Iu2jiZP3kC8",
    authDomain: "facebook-clone-24d6c.firebaseapp.com",
    projectId: "facebook-clone-24d6c",
    storageBucket: "facebook-clone-24d6c.appspot.com",
    messagingSenderId: "80886269318",
    appId: "1:80886269318:web:43c111194adfcfad39d807",
    measurementId: "G-GR2MLL4YJ7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
//
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;