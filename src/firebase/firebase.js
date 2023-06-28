import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,setDoc } from 'firebase/firestore';
import { set } from 'firebase/database';



const firebaseConfig = {
  apiKey: "AIzaSyDWLtG46Zf5Kbn3rWmls_ah4xNZLEgw7OU",
  authDomain: "react-project-505e0.firebaseapp.com",
  projectId: "react-project-505e0",
  storageBucket: "react-project-505e0.appspot.com",
  messagingSenderId: "622019509200",
  appId: "1:622019509200:web:b8d31b5b320a8bb9f517d5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

