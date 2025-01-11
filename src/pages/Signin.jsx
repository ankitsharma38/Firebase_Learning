import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const Signin = () => {
     const [email, setEmail] = useState ("");
     const [password, setPassword] = useState("");

     const signinUser = () =>{
          signInWithEmailAndPassword(auth, email, password)
          .then((value) => console.log('Signin Success'))
          .catch((err)=> console.log(err));
          
     };
     
  return (
    <div className='signin-page'>
        <h1>SignIn Page</h1>
          <label>Enter your Email</label>
          <input 
               onChange={(e) => setEmail(e.target.value)}
               value={email}  
               type="email" 
               placeholder="Enter your Email here"/>
          <label> Enter your Password</label>
          <input
               onChange={(e)=>setPassword(e.target.value)}
               value={password}
               type="password" 
               placeholder="Enter your Password here"/>
          <button onClick={signinUser}>SignIn</button>
     </div>
  );
};

export default Signin