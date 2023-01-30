import React from 'react'

type propsType={
children:string
}

function HeadingChildren(props:propsType) {
  return (
    <div>HeadingChildren {props.children}</div>
  )
}

export default HeadingChildren