import React from 'react'
import { personName } from './Person.types'

//you can use in same file

// type personName ={
//   name:{
//     firstName:string;
//     lastName:string
//   }
// }


function Person(props:personName) {

  return (
    <div>Person {props.name.firstName} {props.name.lastName}</div>
  )
}

export default Person;