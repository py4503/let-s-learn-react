import { useState } from 'react'
import './App.css'
import Card from './card'
function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"Alo0",
    age:2
  }
  let arr=[1,2,3,4]
  return (
      <>
      <h1 className='bg-black rounded-xl text-white p-4 border-sky-200'>TailWind</h1>
      <Card username="pratyush" obj={arr} btntext="let's go" />
      </>
  )
}

export default App
