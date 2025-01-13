import { initializeApp } from "firebase/app";
import { createContext, useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getDatabase,set, ref } from "firebase/database";

const firebaseConfig = {
     apiKey: "AIzaSyCJs-pQSpI94F63n4hEb_1B1b8ddXesH2Y",
     authDomain: "app-f60d0.firebaseapp.com",
     databaseURL: "https://app-f60d0-default-rtdb.firebaseio.com",
     projectId: "app-f60d0",
     storageBucket: "app-f60d0.firebasestorage.app",
     messagingSenderId: "942355380101",
     appId: "1:942355380101:web:5b1eff5da6d7d2e7dc36ec",
     databaseURL: "https://app-f60d0-default-rtdb.firebaseio.com/"
   };
   
   const firebaseApp = initializeApp(firebaseConfig);
   const firebaseAuth = getAuth(firebaseApp);
   const database = getDatabase(firebaseApp);
   
   const FirebaseContext = createContext(null);

//! Custom Hook here logic
export const useFirebase = () =>useContext(FirebaseContext);

export const FirebaseProvider = (props)=>{
     const signupUserWithEmailAndPassword = (email, password)=>{
          createUserWithEmailAndPassword(firebaseAuth, email, password)
     };

     const putData = (key, data)=> set(ref(database, key), data);

     return(
          <FirebaseContext.Provider 
               value={{signupUserWithEmailAndPassword,putData}}
          >
               {props.children}
          </FirebaseContext.Provider>

     )
}







