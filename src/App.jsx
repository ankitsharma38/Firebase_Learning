import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from './firebase';
import Signup from "./pages/SignUp";
import Signin from "./pages/Signin";
import './App.css'

const auth = getAuth(app);

function App() {
  const signupUser=()=>{
    createUserWithEmailAndPassword(
      auth,
      'ankitsharma123@gmail.com',
    "ankit@123"
  ).then((value)=>console.log(value));
  }
  return (
    <>
      <div className="App">
        <Signup/>
        <Signin/>
      </div>
    </>
  )
}

export default App
