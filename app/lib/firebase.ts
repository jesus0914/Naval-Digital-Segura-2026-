import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA_2KYJu6kdwVXnScfjNMtn8bAx4RSwCn4",
  authDomain: "naval-digital-segura-2026.firebaseapp.com",
  databaseURL:
    "https://naval-digital-segura-2026-default-rtdb.firebaseio.com",
  projectId: "naval-digital-segura-2026",
  storageBucket: "naval-digital-segura-2026.firebasestorage.app",
  messagingSenderId: "1081752219766",
  appId: "1:1081752219766:web:e8ec33cc3c59ad063daf57",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const database = getDatabase(app);

export default app;