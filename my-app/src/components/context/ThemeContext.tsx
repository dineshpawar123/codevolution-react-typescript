import { createContext } from 'react'
import {theme} from './theme'

type ThemeContextProviderProps = {
    children:React.ReactNode
}

export const ThemeContext = createContext(theme);

console.log("==>",ThemeContext)
// function ThemeContext() {
//   return (
//     <div>ThemeContext</div>
//   )
// }

export const ThemeContextProvider = ({children}:ThemeContextProviderProps)=>{
    return  <ThemeContext.Provider value={theme}>
                {children}
            </ThemeContext.Provider>
}

// export default ThemeContext