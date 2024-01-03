
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";



export const firebaseConfig = {
  apiKey: "AIzaSyCI_DGidbXjnvksaM2dYTN8uYq3ViHPZyE",
  authDomain: "livik-rent.firebaseapp.com",
  projectId: "livik-rent",
  storageBucket: "livik-rent.appspot.com",
  messagingSenderId: "585165532381",
  appId: "1:585165532381:web:9b128c03878b092e55ff34"
};


const app = initializeApp(firebaseConfig);



const db = getFirestore();
export { db };
