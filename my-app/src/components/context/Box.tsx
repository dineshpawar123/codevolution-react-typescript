import React from 'react'
import {ThemeContext} from './ThemeContext';
import {useContext} from 'react';

function Box() {
    
  const theme = useContext(ThemeContext);
  console.log("theme",theme)

  return (
    <div style={{backgroundColor:theme.primary.main,
    color:theme.primary.text
    }}>Theme context</div>
  )
}

export default Box;