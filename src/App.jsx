import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from './firebase';
import SignupPage from "./pages/SignUp";
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
        <SignupPage/>
      </div>
    </>
  )
}

export default App
