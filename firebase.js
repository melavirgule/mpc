import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration


// Initialize firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

// Initialize services
export const db = getFirestore(app);
