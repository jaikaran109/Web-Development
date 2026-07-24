import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='nav'>
          <h3> JK Motors </h3>
        <div>
          {/* <a href="/">Home</a>
          <a href="/about">About</a>   --  a tag use krne se page reload ho rha h to iske liye Router link tag provide krta h 
          <a href="/contact">Contact</a> */} 

          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar