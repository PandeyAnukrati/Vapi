
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAnskEqJu6Cw8oyVRr72J4lxtHQPcH7upA",
    authDomain: "vapi-vocabot.firebaseapp.com",
    projectId: "vapi-vocabot",
    storageBucket: "vapi-vocabot.firebasestorage.app",
    messagingSenderId: "875892126206",
    appId: "1:875892126206:web:f30da2023a8c449dfc50af",
    measurementId: "G-9Z999CGL4Q"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);