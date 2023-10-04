// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyArhPgpEjlEoZ3pP4slmyLwFqSBQ2yyRfU",
  authDomain: "testedebd-bd.firebaseapp.com",
  projectId: "testedebd-bd",
  storageBucket: "testedebd-bd.appspot.com",
  messagingSenderId: "720333579705",
  appId: "1:720333579705:web:88c49db043c461d0dd0268",
  measurementId: "G-35VP93R79N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)