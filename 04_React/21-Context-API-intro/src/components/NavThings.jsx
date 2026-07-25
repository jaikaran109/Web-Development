import React from 'react'


const NavThings = (props) => {

    
  return (
    <div className='navThings'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Footer</h4>
        <h4>{props.theme}</h4>
    </div>
  )
}

export default NavThings