
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDckxCsnvtnhWXcELEjZyCSDt-2CeJp1m4",
  authDomain: "tpq-app-c8414.firebaseapp.com",
  databaseURL: "https://tpq-app-c8414-default-rtdb.firebaseio.com",
  projectId: "tpq-app-c8414",
  storageBucket: "tpq-app-c8414.firebasestorage.app",
  messagingSenderId: "296366612660",
  appId: "1:296366612660:web:fc19b22c61a89ae0fab7e1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

console.log("Firebase initialized for Vite project:", firebaseConfig.projectId);
