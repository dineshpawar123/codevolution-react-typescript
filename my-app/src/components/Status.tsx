import React from 'react'

type statusProps={
    status:string,
    statusSecond: 'error' | 'success' | 'loading';
}

function Status(props:statusProps) {
    let message;
    if(props.status =='error')
    {
        message='error'
    }
    else if(props.status =='success')
    {
        message='success'
    }
    else{
        message='loading...'
    }

  return (
    <div>
        <div>Status is : {message} {props.statusSecond}</div>
    </div>
  )
}

export default Status;