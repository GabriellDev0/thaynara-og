import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

 const firebaseConfig =  {
    apiKey: "AIzaSyDuId70a9Lo3EQ-wV1hu34HJ_-YJQ3UA9w",
    authDomain: "thaynara-og.firebaseapp.com",
    projectId: "thaynara-og",
    storageBucket: "thaynara-og.appspot.com",
    messagingSenderId: "172353495284",
    appId: "1:172353495284:web:b7b8ff1cecd069642e7ea1"
  };

  const authInit = () =>{
    return new Promise((resolve)=>{
      const unsubscribe = auth.onAuthStateChanged(() =>{
        unsubscribe();
        resolve();
      }, console.error)
    })
  }

  const app = initializeApp(firebaseConfig);
  
  const db = getFirestore(app)

  const auth = getAuth(app);

  export { db, auth, authInit }


