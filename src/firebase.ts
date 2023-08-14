import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANd4yZT54bSK0AcbItj1bqB7q5x78fOT0",
  authDomain: "nwitter-reloaded.firebaseapp.com",
  projectId: "nwitter-reloaded",
  storageBucket: "nwitter-reloaded.appspot.com",
  messagingSenderId: "597055701730",
  appId: "1:597055701730:web:ad1f4784fbb491e2a614bb",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
