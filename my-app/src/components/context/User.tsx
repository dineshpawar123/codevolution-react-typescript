import React from 'react'
import {useState,useContext} from 'react';
import {UserContext} from './UserContext';

type AuthUser = {
    name:string,
    email:string
}

function UserNew() {
const userContext = useContext(UserContext)
console.log("userContext",userContext);
  const handleLogin = ()=>{
    // if(userContext)
    // {
      userContext.setUser({
        name:'dinesh',
        email:'dinesh@gmail.com'
    })
    // }
  }

  const handleLogout = ()=>{
    // if(userContext)
        userContext.setUser(null)
  }

  return (
    <div>
        <button onClick={handleLogin}> Login</button>
        <button onClick={handleLogout}>Logout</button>
       <div>user name is {userContext.user?.name}</div>
       <div>user email is {userContext.user?.email}</div>
    </div>
  )
}

export default UserNew;