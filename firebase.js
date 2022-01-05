import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// import variables from "./variables";
// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";



// My web app's Firebase configuration
const firebaseConfig = {

  };

// Initialize firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);


// Initialize services
export const db = getFirestore(app);

