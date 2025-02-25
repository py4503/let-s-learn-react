import React from "react";
import { useState,useContext } from "react";
import UserContext from "../context/userContext";
function Login(){
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    const {setUser}=useContext(UserContext);

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password});
    }
return(
    <>
    <div>Login to proceed....</div>
    <input
    type="text" 
    placeholder="username"
    value={username}
    onChange={(e)=>setUsername(e.target.value)}
    />
    <span>   </span>
    <input
    type="text" 
    placeholder="password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    />
    <br />
    <button onClick={handleSubmit}>Submit</button>
    </>
)
}
export default Login