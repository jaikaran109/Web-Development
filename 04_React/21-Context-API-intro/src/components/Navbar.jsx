import React from 'react'
import NavThings from './NavThings'
import { useContext } from 'react'
import {ThemeDataContext} from '../context/ThemeContext'

const Navbar = (props) => {

  const data = useContext(ThemeDataContext)
  
  return (
    <div className='nav'>
        <h1>{data}</h1>
        <NavThings theme={props.theme} />
    </div>
  )
}

export default Navbar