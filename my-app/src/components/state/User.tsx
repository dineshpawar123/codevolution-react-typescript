import React from 'react'
import {useState} from 'react';

type AuthUser = {
    name:string,
    email:string
}

function User() {

  //const [user,setUser] = useState<AuthUser | null>(null)
  const [user,setUser] = useState<AuthUser>({} as AuthUser)
  console.log("user",user)
  const handleLogin = ()=>{
    setUser({
        name:'dinesh',
        email:'dinesh@gmail.com'
    })
  }

  const handleLogout = ()=>{
     setUser({name:'',email:''})
  }

  return (
    <div>
        <button onClick={handleLogin}> Login</button>
        <button onClick={handleLogout}>Logout</button>
       <div>user name {user?.name}</div>
       <div>user email is {user?.email}</div>
    </div>
  )
}

export default User