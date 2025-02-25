import { useState,useCallback,useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [charA, setChara] = useState(false)
  const [numA, setNuma] = useState(false)

  const passWordgen=useCallback(()=>{
    let pass=""
    let s="abcdfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(charA){
      s+='!@#$%^&*()_+';
    }
    if(numA){
      s+='1234567890';
    }
    let char;
    for(let i=1;i<length;i++){
      char=Math.floor(Math.random()*s.length+1);
      pass+=s.charAt(char);
    }
    setPassword(pass);

  },[setPassword,numA,charA,length])
  const copyPassToClip=useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    reference.current?.select()
    reference.current?.setSelectionRange(0,8)
  },[password])
  useEffect(()=>passWordgen,[setPassword,numA,charA,length])
  const reference=useRef(null)
  return (
    <>
      <div>
        <div className='bg-white/10 rounded-2xl p-5'>
          <div className='flex gap-2 justify-between'>
            <input className='outline-none w-80 h-10 self-start' type="text" readOnly placeholder='password' 
            value={password}
            ref={reference}
            />
            <button onClick={()=>copyPassToClip()}
            className='justify-end'>copy</button>
          </div>
          <div className='flex gap-2'>
            <input
            onChange={(e)=>setLength(e.target.value)}
             type="range" min={8} max={16} maxLength={16}/>
            <span>Length:({length})</span>
            <input 
            onChange={()=>setNuma((prev)=>!prev)}
            type="checkbox" name="" id="" />
            <span>Numbers</span>
            <input 
            onChange={()=>setChara((prev)=>!prev)}
             type="checkbox" />
            <span>Characters</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
