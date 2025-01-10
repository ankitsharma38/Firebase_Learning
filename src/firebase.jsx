import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJs-pQSpI94F63n4hEb_1B1b8ddXesH2Y",
  authDomain: "app-f60d0.firebaseapp.com",
  projectId: "app-f60d0",
  storageBucket: "app-f60d0.firebasestorage.app",
  messagingSenderId: "942355380101",
  appId: "1:942355380101:web:9bb8c00bdb20a2b9dc36ec",
  databaseURL:"https://app-f60d0-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);