import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt9a_4XVtpzaUmzrnVSQVLg4EdQAJHUaA",
  authDomain: "crown-clothing-db-defae.firebaseapp.com",
  projectId: "crown-clothing-db-defae",
  storageBucket: "crown-clothing-db-defae.appspot.com",
  messagingSenderId: "462587204254",
  appId: "1:462587204254:web:5813d29a9fa126e967e18f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDoc = async (userAuth, additionalInfo) => {
  if (!userAuth) {
    return;
  }
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  //if user data exists

  //if user does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (err) {
      console.error(err);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return await createAuthUserWithEmailPassword(auth, email, password);
};
