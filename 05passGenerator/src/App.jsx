import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [password,setPassword]=useState();
  const [length,setLength]=useState(8);
  const [numA,setNuma]=useState(false);
  const [charA,setChara]=useState(false);

  const passwordGenerator=useCallback(()=>{
        let pass="";
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numA){
          str+="1,2,3,4,5,6,7,8,9,0";
        }
        if(charA){
          str+="!@#$%^&*(){}";
        }
        for (let i = 1; i <= length; i++) {
          let char=Math.floor(Math.random()*str.length+1);
          pass+=str.charAt(char);
        }
        setPassword(pass);
      }
  ,[numA,charA,length,setPassword]);//don't give password instead of set password because on 
  // every change of value it will call again and eventually lead into infinite loop
  // it do memoization
  // passwordGenerator()
  useEffect(()=>{
    passwordGenerator();
  },[numA,charA,length,passwordGenerator])

  const passRef=useRef(null);
  const copyPassToClip=useCallback(()=>{
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0,1); // to select a particular range
    window.navigator.clipboard.writeText(password);
  },[password])
  return (
    <>
    <div className='w-full max-w-md h-max mx-auto shadow-md rounded-lg my-10 px-4 py-8 text-white' style={{backgroundColor:'#212121'}}>
     <h2 className='text-center'>password generator</h2>
     <div className='flex shadow rounded-4xl overflow-hidden border-2 mb-4'>
     <input type="text"
     value={password}
     className='outline-none w-full px-5 text-black bg-white'
     placeholder='password'
     readOnly
     ref={passRef} />
     <button
     onClick={copyPassToClip}
     className='text-center outline-none bg-blue-600  px-3 shrink-0 text-black'
     >copy</button>
     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex item-center gap-x-1'>
        <input type="range"
         min={8}
         max={100}
         value={length}
         className='cursor-pointer'
         onChange={(e)=>setLength(e.target.value)}
         />
         <label>length:{length}</label>
      </div>
      <div className='items-center text-sm flex gap-x-2 overflow-hidden'>
        <input type="checkbox" 
        defaultChecked={numA}
        onChange={()=>setNuma((previous)=>!previous)}/>
        <label className='text-center'>number</label>
      </div>
      <div className='items-center text-sm flex gap-x-2 overflow-hidden'>
        <input type="checkbox" 
        defaultChecked={numA}
        onChange={()=>setChara((previous)=>!previous)}/>
        <label className='text-center'>charachters</label>
      </div>
     </div>
    </div>
    </>
  )
}

export default App
