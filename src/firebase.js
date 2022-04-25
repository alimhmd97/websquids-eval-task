import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXrbpj0DZKkuQjOy0ZllRoNmXbJ8wUdBg",
  authDomain: "websquids-auth.firebaseapp.com",
  projectId: "websquids-auth",
  storageBucket: "websquids-auth.appspot.com",
  messagingSenderId: "852650363486",
  appId: "1:852650363486:web:e0fb3038e7ca44f793c2cf",
  measurementId: "G-QNPYFCZNRQ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
