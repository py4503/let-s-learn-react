import { useState } from 'react'
import './App.css'

function App() {
  const[color,setColor]=useState("blue");

 return(
  // for hex code values use single quotes
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='flex-wrap fixed bottom-2 inset-x-16 h-12 flex  justify-center rounded-full gap-10' style={{backgroundColor:"white"}}>
          <button onClick={()=>setColor("red")} className='outline-none px-10 rounded-full border-2' style={{backgroundColor: "red"}}>red</button>
          <button onClick={()=>setColor("green")} className='outline-none px-10 rounded-full border-2' style={{backgroundColor: "green"}}>green</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-10 rounded-full border-2' style={{backgroundColor: "blue"}}>blue</button>
          <button onClick={()=>setColor("yellow")} className='outline-none px-10 rounded-full border' style={{backgroundColor: "yellow"}}>yellow</button>
        </div>
    </div>
  )
}

export default App
