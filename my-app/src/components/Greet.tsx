import React from 'react';

type GreetProps = {
    name:string,
    messageCount?:number,
    isLoggedIn:boolean
}

function Greet(props:GreetProps) {
  const { messageCount= 0 } = props;

  return (
    <h2>
        {
            props.isLoggedIn ?  <div>Welcome {props.name} , message count is {messageCount} {props.isLoggedIn}</div>:'Welcome Guest'
        }
    </h2>
  )
}

export default Greet;