// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBX5vREzqwi2In00MziBxNi3WU7vjngqLM",

  authDomain: "muso-playlist-6fecb.firebaseapp.com",

  projectId: "muso-playlist-6fecb",

  storageBucket: "muso-playlist-6fecb.appspot.com",

  messagingSenderId: "626619430777",

  appId: "1:626619430777:web:fd4cbf014243eeb461a1a8",

  measurementId: "G-QS31BQ7K65"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);