import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-2 bg-cyan-900 items-center justify-between'>
        <h2 className='font-xl font-bold'>JK Cement </h2>
        <div className='flex gap-8'>
            <Link to='/' className='font-xl font-bold'>Home</Link>
            <Link to='/about' className='font-xl font-bold'>About</Link>
            <Link to='/courses' className='font-xl font-bold'>Courses</Link>
            <Link to='/product' className='font-xl font-bold'>Product</Link>
            
        </div>
    </div>
  )
}

export default Navbar