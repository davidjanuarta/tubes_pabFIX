import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyCI_DGidbXjnvksaM2dYTN8uYq3ViHPZyE",
    authDomain: "livik-rent.firebaseapp.com",
    projectId: "livik-rent",
    storageBucket: "livik-rent.appspot.com",
    messagingSenderId: "585165532381",
    appId: "1:585165532381:web:9b128c03878b092e55ff34"
});

const FIREBASE = firebase;

export default FIREBASE;