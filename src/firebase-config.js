import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBKCeF3buOM0oVy2KZ21cfU0b2efZQpxQo",
  authDomain: "cambridgewealth-webinar.firebaseapp.com",
  projectId: "cambridgewealth-webinar",
  storageBucket: "cambridgewealth-webinar.appspot.com",
  messagingSenderId: "651081174782",
  appId: "1:651081174782:web:a4526c31d3c50f05ed5faf"
  };

  const app = initializeApp(firebaseConfig);
export const db = getFirestore();