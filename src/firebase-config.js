import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyC4msIk5ZTKywZZHJm2wkYq9Pv0ihmfW74",
//     authDomain: "swuser-42ef6.firebaseapp.com",
//     projectId: "swuser-42ef6",
//     storageBucket: "swuser-42ef6.appspot.com",
//     messagingSenderId: "396281700320",
//     appId: "1:396281700320:web:6150ace574f13362641585",
//     measurementId: "G-SSWN0MR7DC"
// };

const firebaseConfig = {
    apiKey: "AIzaSyBSAIq4wPb_uv9buTibwqtxm8HfUuavFbc",
    authDomain: "swuser-7314a.firebaseapp.com",
    projectId: "swuser-7314a",
    storageBucket: "swuser-7314a.appspot.com",
    messagingSenderId: "138599817814",
    appId: "1:138599817814:web:0bd46ef56ca30085e6d1f7",
    measurementId: "G-L7KYGFHSPV"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);