import { getAuth,  onAuthStateChanged } from "firebase/auth";
import { app } from './firebase';
import Signup from "./pages/SignUp";
import Signin from "./pages/Signin";
import './App.css'
import { useEffect } from "react";

const auth = getAuth(app);

function App() { 
  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //Yes, You are logged in
        console.log("Hello",user);
      }else {
        // User is logged out
        console.log("You are logout")
      }
  });
  },[]);

    return (
      <>
        <div className="App">
          <Signup/>
          <Signin/>
        </div>
      </>
    );
  }

export default App
