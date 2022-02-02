import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4msIk5ZTKywZZHJm2wkYq9Pv0ihmfW74",
    authDomain: "swuser-42ef6.firebaseapp.com",
    projectId: "swuser-42ef6",
    storageBucket: "swuser-42ef6.appspot.com",
    messagingSenderId: "396281700320",
    appId: "1:396281700320:web:6150ace574f13362641585",
    measurementId: "G-SSWN0MR7DC"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);