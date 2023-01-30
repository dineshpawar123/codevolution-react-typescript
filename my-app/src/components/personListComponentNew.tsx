import React from 'react'
type personList={
  
  list:{
    firstName:string,
    lastName:string
  }[]
}

function PersonListComponentNew(props:personList) {
  return (
    <div>{
      props.list.map((data,i)=>{
        return  <div key={i}>
                  <div>{data.firstName}</div>
                  <div>{data.lastName}</div>
                </div>
      })
      }</div>
  )
}

export default PersonListComponentNew