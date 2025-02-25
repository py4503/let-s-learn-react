import { useState } from "react"
import React from "react"
import UserContext from "./userContext"

const UserContextProvider=({children})=>{
    // user is an object
    const[user,setUser]=useState(null)

    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider