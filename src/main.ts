import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGAWB-Py5Vktyo9eMKY0K3i4NXbrTOK6E",
  authDomain: "pioneer-fa51e.firebaseapp.com",
  projectId: "pioneer-fa51e",
  storageBucket: "pioneer-fa51e.appspot.com",
  messagingSenderId: "406741464537",
  appId: "1:406741464537:web:67d1c443b505074a9f95c8",
  measurementId: "G-RGSC95SN2F"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
signInAnonymously(auth).then(() => {
  createApp(App).mount('#app')
}).catch(console.error);

