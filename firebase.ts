/// <reference types="vite/client" />
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyD7CilhnIpbvCwS8tU113xFyruh-VuzznU",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "kpsc-cd159.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "kpsc-cd159",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "kpsc-cd159.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1024694790928",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1024694790928:web:e08dc1d59b50b741d7d395"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
