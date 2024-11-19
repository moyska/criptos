import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9KlYfqLrk0r20W5nIAU9ZYL_7R6ZuJ58",
  authDomain: "projeto-cripto-254a8.firebaseapp.com",
  projectId: "projeto-cripto-254a8",
  storageBucket: "projeto-cripto-254a8.firebasestorage.app",
  messagingSenderId: "684408844621",
  appId: "1:684408844621:web:37ecace4bdeb381e83c704",
  measurementId: "G-B4K0NC7KQL"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
