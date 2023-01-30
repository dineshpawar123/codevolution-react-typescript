import React from 'react'

type propsType={
children:React.ReactNode
}

function OscarNew(props:propsType) {
  return (
    <div>Oscar{props.children}</div>
  )
}

export default OscarNew;  