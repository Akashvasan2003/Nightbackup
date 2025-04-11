// app/firebaseConfig.ts (or .js if not using TypeScript)

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTD2_UNfWSBld5R57tGDncqhuiik5oqJE",
  authDomain: "movietracker-9de53.firebaseapp.com",
  projectId: "movietracker-9de53",
  storageBucket: "movietracker-9de53.appspot.com",
  messagingSenderId: "912852941875",
  appId: "1:912852941875:android:12886ee8b20c355d6bb746",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export Firebase services
export {
  app,
  auth,
  db,
  storage,
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
};
