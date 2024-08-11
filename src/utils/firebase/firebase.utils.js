import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL14b4C3slIK76gIt2sAgLttnmnWsHmg8",
  authDomain: "crwn-clothing-82dd1.firebaseapp.com",
  projectId: "crwn-clothing-82dd1",
  storageBucket: "crwn-clothing-82dd1.appspot.com",
  messagingSenderId: "560698475223",
  appId: "1:560698475223:web:5321f54afdf19d454f2692",
  signInFlow: 'popup',
};

// Initialize Firebase
// const firebaseApp = 
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDocumetFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnap = await getDoc(userDocRef);

  if(!userSnap.exists()) {
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  try {
    setDoc(userDocRef,{
      displayName,
      email,
      createdAt,
    })
  } catch (error) {
    console.log("Error creating user",error);
  }
  return userDocRef;
};
};