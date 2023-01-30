import React from 'react'

type InputProps={
    value:number,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

function Input(props:InputProps) {

  return (
    <div>
        <input type='text' value={props.value} onChange={(e)=>props.handleChange(e)}/>
    </div>
  )
}


//props destrucuring
// function Input({value,handleChange}:InputProps) {

//   return (
//     <div>
//         <input type='text' value={value} onChange={(e)=>handleChange(e)}/>
//     </div>
//   )
// }


export default Input