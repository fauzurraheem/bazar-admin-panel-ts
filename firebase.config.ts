// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEW_3IzCRGRMDr9J_sVQz9NfYTeo1Kii0",
  authDomain: "admin-panel-255d1.firebaseapp.com",
  projectId: "admin-panel-255d1",
  storageBucket: "admin-panel-255d1.appspot.com",
  messagingSenderId: "354355254628",
  appId: "1:354355254628:web:67e407bfd70aaa0871d671"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp);
