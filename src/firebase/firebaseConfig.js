import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "SUA_KEY",
  authDomain: "campeonato-bairro-f1b14.firebaseapp.com",
  databaseURL: "https://campeonato-bairro-f1b14-default-rtdb.firebaseio.com",
  projectId: "campeonato-bairro-f1b14",
  storageBucket: "campeonato-bairro-f1b14.firebasestorage.app",
  messagingSenderId: "107353619301",
  appId: "1:107353619301:web:ae1febb3a5068248167fc",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);