import React from 'react'
import {createContext} from 'react'

export const ThemeDataContext = createContext();

const ThemeContext = (props) => {
  return (
    <ThemeDataContext.Provider value='Jai Karan'>
        {props.children}
    </ThemeDataContext.Provider>
  )
}

export default ThemeContext