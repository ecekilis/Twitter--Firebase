
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

getStorage

const firebaseConfig = {
    apiKey: "AIzaSyDAz0K41a6kGtahBef13Z47m2C1v1rR-3M",
    authDomain: "twitter-b81ed.firebaseapp.com",
    projectId: "twitter-b81ed",
    storageBucket: "twitter-b81ed.appspot.com",
    messagingSenderId: "460779981146",
    appId: "1:460779981146:web:40332f4bc46d4e00038b63"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const storage = getStorage(app);

