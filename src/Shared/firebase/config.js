import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAonQTFuujzl6XrOoFAcr4ttQSBjiH_aRA",
  authDomain: "debstat-d9c5c.firebaseapp.com",
  projectId: "debstat-d9c5c",
  storageBucket: "debstat-d9c5c.appspot.com",
  messagingSenderId: "603277078796",
  appId: "1:603277078796:web:4dccc3ee2981264693d929",
  measurementId: "G-P31WHTNNG8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
