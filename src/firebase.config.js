import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBh3JgmaEjy88jKMewPjsrvEEDmK02wC24",
  authDomain: "shake-world.firebaseapp.com",
  databaseURL: "https://shake-world-default-rtdb.firebaseio.com",
  projectId: "shake-world",
  storageBucket: "shake-world.appspot.com",
  messagingSenderId: "922663273578",
  appId: "1:922663273578:web:982814a7cf41eeb4cfb613",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
