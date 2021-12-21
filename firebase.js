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

    // apiKey: API_KEY,
    // authDomain: AUTH_DOMAIN,
    // projectId: PROJECT_ID,
    // storageBucket: STORAGE_BUCKET,
    // messagingSenderId: MESSAGING_SENDER_ID,
    // appId: APP_ID

    // apiKey: apiKey,
    // authDomain: authDomain,
    // projectId: projectId,
    // storageBucket: storageBucket,
    // messagingSenderId: messagingSenderId,
    // appId: appId
    



  };

// Initialize firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

// https://firebase.google.com/docs/auth/web/custom-dependencies
// export const authentication = initializeAuth(app, {
//   persistence: browserLocalPersistence,
//   // No popupRedirectResolver defined
// });
// Initialize services
export const db = getFirestore(app);

