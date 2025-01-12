//--Learning FireBase Store
//-- This this , code we learn write data in cloud firebase store 
// --And also learn read the data from the store 

import { getFirestore,
          collection,
          addDoc, 
          doc, 
          getDoc,
          query,
          where,
          getDocs,
          updateDoc,
      } 
      from 'firebase/firestore'; //* Importing the Firestore SDK
import { app } from "./firebase";
import './App.css'

const firestore = getFirestore(app);

function App() { 
     //++  write data on cloud
     const writeData =async()=>{
          const result = await addDoc(collection(firestore, 'cities'),{
               name : 'Delhi',
               pinCode : 12345,
               lat : 123,
               long : 456,

          });
          console.log("Result", result);
     };
     //++ FOr write more data on cloud
     const makeSubCollection =async ()=>{
          const result2 = await addDoc(collection(firestore, 'cities/kmodWM16BLMxz76Wg2s2/places'),{
               name: "This is CP the beautiful place 3",
               desc: "Awsm Desc",
               date: Date.now(),
          });
          //!  Printed on the console 
          console.log("Updated Result 2 Successfully", result2);
     };
     //++ Read data from cloud
     const readData = async () => {
          const ref = doc(firestore, 'cities', 'kmodWM16BLMxz76Wg2s2');
          const snap = await getDoc(ref);

          //!  Printed on console
          console.log(snap.data());
     }
     //++ Here we are getting data by query
     const readDataByQuery = async () => {
          const collectionRef = collection(firestore, "users");
          const q = query(collectionRef, where("isMale", "==", true));
          const Snapshot = await getDocs(q);

          //! Printed on console
          Snapshot.forEach((data) => console.log(data.data()));
     };

     //++ For Update and deletion of the data 
     const update = async () => {
          const docRef = doc(firestore, 'cities', 'kmodWM16BLMxz76Wg2s2');
          const resultUpdate= await updateDoc(docRef, {
               name: 'New Delhi'
          });
          console.log("Update SuccessFully", resultUpdate);
     }
                         
     return(
          <>
            <div className="App">
              <h1>FireBase Store</h1>
              <button onClick={writeData}>PutData</button><hr />
              <button onClick={makeSubCollection}>Put SubData</button> <hr />
              <button onClick={readData}> Read Data</button> <hr />
              <button onClick={readDataByQuery}>Read Data By Query</button><hr />
              <button onClick={update}>Update</button>

            </div>
          </>
          );
}
export default App