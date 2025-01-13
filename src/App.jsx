import React, { useState } from 'react';
import { useFirebase } from './context/firebase';
import './App.css'


const App = () => {
     const firebase = useFirebase();
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     console.log("Firebase", firebase);

  return (
    <div className='App'>
          <h1>Firebase</h1>
          <input onChange={(e)=> setEmail(e.target.value)} 
            type="email" placeholder='Enter Email' />&nbsp;

          <input onChange={(e) => setPassword(e.target.value)} 
            type="password" placeholder='Enter Password' /> <hr />

          <button 
            onClick={()=> {
              firebase.signupUserWithEmailAndPassword(email, password);
              firebase.putData('user/' + "ankitsharma", { email, password});

          }}>Signup</button>
    </div>
  )
}

export default App