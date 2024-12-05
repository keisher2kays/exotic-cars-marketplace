// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCVou9eA-hVZffKPSTDfcBIpR0BRs3NRxM",
//   authDomain: "exotic-marketplace-2d5ec.firebaseapp.com",
//   projectId: "exotic-marketplace-2d5ec",
//   storageBucket: "exotic-marketplace-2d5ec.firebasestorage.app",
//   messagingSenderId: "950688266459",
//   appId: "1:950688266459:web:a6d23750a0d1a984b6b4fe",
//   measurementId: "G-BGLB39B7ZE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCVou9eA-hVZffKPSTDfcBIpR0BRs3NRxM",
  authDomain: "exotic-marketplace-2d5ec.firebaseapp.com",
  projectId: "exotic-marketplace-2d5ec",
  storageBucket: "exotic-marketplace-2d5ec.firebasestorage.app",
  messagingSenderId: "950688266459",
  appId: "1:950688266459:web:a6d23750a0d1a984b6b4fe",
  measurementId: "G-BGLB39B7ZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };