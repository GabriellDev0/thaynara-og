import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

 const firebaseConfig =  {
    apiKey: "AIzaSyDuId70a9Lo3EQ-wV1hu34HJ_-YJQ3UA9w",
    authDomain: "thaynara-og.firebaseapp.com",
    projectId: "thaynara-og",
    storageBucket: "thaynara-og.appspot.com",
    messagingSenderId: "172353495284",
    appId: "1:172353495284:web:b7b8ff1cecd069642e7ea1"
  };

  const app = initializeApp(firebaseConfig);
  
  const db = getFirestore(app)

  export { db }

