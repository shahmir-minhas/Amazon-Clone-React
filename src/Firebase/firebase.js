// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAYywYeQWDTGUFC6APYqGa8Keq8ilHSWzQ",
  authDomain: "clone-ada80.firebaseapp.com",
  projectId: "clone-ada80",
  storageBucket: "clone-ada80.appspot.com",
  messagingSenderId: "7663825264",
  appId: "1:7663825264:web:fba067ddf1a46b5fba1fb5",
  measurementId: "G-7NQC5ZZESH",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const db = firebaseApp.firestore()
const auth = getAuth();

export { db, auth };
