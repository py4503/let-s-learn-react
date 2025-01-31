import { useState } from 'react'
import './App.css'

function App() {
  // let count=0;
  const [counter,setCounter]=useState(0);
  function counterF(){
    // counter++;
    // console.log(counter);
    //s-1 count is not increasing as react don't allow variable update without using hooks
    // react controls ui updation
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // useState send updates in batches and see these operations as same and will result
    // in update of counter only by one
    // so for this their is call back in react by which we can perform 
    // these set of operations

    setCounter(pCounter=>pCounter+1);
    setCounter(pCounter=>pCounter+1);
    setCounter(pCounter=>pCounter+1);
    setCounter(pCounter=>pCounter+1);
    console.log(counter);
  }
  function countred(){
    if(counter>0){
    counter--;
    }
    setCounter(counter-1);
    console.log(counter);
  }
  return (
    <>
   <h1>Counter</h1>
   <h2>count : {counter}</h2>
   <button onClick={counterF}>Add count</button>
   <button onClick={countred}>remove count</button>
   </>
  )
}

export default App
