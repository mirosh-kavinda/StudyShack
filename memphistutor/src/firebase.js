import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCg-0uUEkZ39mEvcNrdcA3Y3Hi71DZT0qk",
  authDomain: "studyshack-f4454.firebaseapp.com",
  databaseURL: "https://studyshack-f4454-default-rtdb.firebaseio.com",
  projectId: "studyshack-f4454",
  storageBucket: "studyshack-f4454.appspot.com",
  messagingSenderId: "394298543201",
  appId: "1:394298543201:web:6460d7bc0453b6cbfcae20",
  measurementId: "G-Q85N2X5ESN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
