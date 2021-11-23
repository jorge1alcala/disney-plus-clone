
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBvtSh7J09iUzNXT_uR0d_X1S-xXj6CqLQ",
  authDomain: "disneyplus-clone-714dc.firebaseapp.com",
  projectId: "disneyplus-clone-714dc",
  storageBucket: "disneyplus-clone-714dc.appspot.com",
  messagingSenderId: "680409295786",
  appId: "1:680409295786:web:fcf3ab9e3f33680fef19d3",
  measurementId: "G-ZW9NTTETV0"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider;
const storage = getStorage(firebaseApp);


export { auth, provider, storage };
export default db;