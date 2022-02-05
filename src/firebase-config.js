import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSAIq4wPb_uv9buTibwqtxm8HfUuavFbc",
  authDomain: "swuser-7314a.firebaseapp.com",
  projectId: "swuser-7314a",
  storageBucket: "swuser-7314a.appspot.com",
  messagingSenderId: "138599817814",
  appId: "1:138599817814:web:0bd46ef56ca30085e6d1f7",
  measurementId: "G-L7KYGFHSPV",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
