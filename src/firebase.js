// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDHj8ldcueyWTji7gvkQHTLT3bY9TYXyVE",
    authDomain: "exotic-marketplace.firebaseapp.com",
    projectId: "exotic-marketplace",
    storageBucket: "exotic-marketplace.firebasestorage.app",
    messagingSenderId: "277219039915",
    appId: "1:277219039915:web:9bc193e4aa1a7fb6e1f5ee",
    measurementId: "G-MH1TXPE38H"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };