import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvoder} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQDm2zdsWeertvjgRCUdHqFNUl9QxiRqE",
  authDomain: "myblog-ab2ce.firebaseapp.com",
  projectId: "myblog-ab2ce",
  storageBucket: "myblog-ab2ce.appspot.com", // ✅ corrected line
  messagingSenderId: "622915880560",
  appId: "1:622915880560:web:edfd59d476e04c85f116b5",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvoder();