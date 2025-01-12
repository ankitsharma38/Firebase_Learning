import { useEffect, useState } from "react";
import { getAuth,  onAuthStateChanged, signOut } from "firebase/auth";
import { app } from './firebase';
import Signup from "./pages/SignUp";
import Signin from "./pages/Signin";
import './App.css'


const auth = getAuth(app);

function App() { 
  const [user, setUser] = useState(null);
  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //Yes, You are logged in
        setUser(user);
        // console.log("Hello",user);
      }else {
        // User is logged out
        console.log("You are logout");
        setUser(null);
      }
  });
  },[]);
  if(user === null){
    return(
      <>
        <div className="App">
          <Signup/>
          <Signin/>
        </div>
      </>
    )
  }

    return (
      <>
        <div className="App">
          <h1>Hello{user.email}</h1>
          <button onClick={()=>signOut(auth)}>LogOut</button>
        </div>
      </>
    );
  }

export default App
