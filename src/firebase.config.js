// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWcrPUuQmEYtr0Vbw0niwU2TSod-Wmaf0",
  authDomain: "notice-board-8cc49.firebaseapp.com",
  projectId: "notice-board-8cc49",
  storageBucket: "notice-board-8cc49.appspot.com",
  messagingSenderId: "611134362621",
  appId: "1:611134362621:web:bec42a91ca5e1ff7683f94",
  measurementId: "G-KQJVS54KZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}