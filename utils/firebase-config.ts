import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {  
  apiKey: "AIzaSyC0lO5UgpvC7Bg1lh33qhC2CSxdxHSKQ3g",
  authDomain: "arduinoday-db0c3.firebaseapp.com",
  projectId: "arduinoday-db0c3",
  storageBucket: "arduinoday-db0c3.appspot.com",
  messagingSenderId: "617849888802",
  appId: "1:617849888802:web:fdba757f2d02b373d7ea7b",
  measurementId: "G-E0E2ED4ZCM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
