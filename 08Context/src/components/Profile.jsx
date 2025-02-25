import React, { useContext } from "react";
import UserContext from "../context/userContext";
// import { useState } from "react";

function Profile(){
    const {user}=useContext(UserContext);
    if(user){
    return <div>Welcome! {user.username}</div>;
    // can't render directly because user is an object
    }
        return <div>Please login!</div>
}

export default Profile