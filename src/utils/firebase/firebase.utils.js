import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL14b4C3slIK76gIt2sAgLttnmnWsHmg8",
  authDomain: "crwn-clothing-82dd1.firebaseapp.com",
  projectId: "crwn-clothing-82dd1",
  storageBucket: "crwn-clothing-82dd1.appspot.com",
  messagingSenderId: "560698475223",
  appId: "1:560698475223:web:5321f54afdf19d454f2692",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();

GoogleProvider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth(firebaseApp);

export const signInWithGooglePopup = () => {
  try {
    return signInWithPopup(auth, GoogleProvider);
  } catch (error) {
    console.log(error);
  }
};

const db = getFirestore();

export const createUserDocumetFromAuth = async (
  userAuth,
  additionalData = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnap = await getDoc(userDocRef);

  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error);
    }
    return userDocRef;
  }
};

export const createUser = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuth = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};