import React from 'react';

type ContainerProps={
  style:React.CSSProperties
}

function Container(props:ContainerProps) {
  return (
    <div style={props.style}>Container</div>
  )
}

export default Container;