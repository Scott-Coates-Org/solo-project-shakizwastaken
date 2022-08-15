import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// import { initializeApp as initializeAdminApp } from "firebase-admin/app";
// import { getAuth as getAdminAuth } from "firebase-admin/auth";

import "@firebase/auth";
import "@firebase/storage";
import "firebase/firestore";

const firebaseKey = process.env.REACT_APP_FIREBASE_API_KEY;
const firebaseProjectId = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const firebaseAuthDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const firebaseStorageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;

const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: firebaseAuthDomain,
  projectId: firebaseProjectId,
  storageBucket: firebaseStorageBucket,
};

const _firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(_firebaseApp);
const auth = getAuth(_firebaseApp);

//firebase admin sdk
//for creating new users without kicking current user
// const _adminApp = initializeAdminApp(firebaseConfig);
// const adminAuth = getAdminAuth(_adminApp);

export { db, auth };
