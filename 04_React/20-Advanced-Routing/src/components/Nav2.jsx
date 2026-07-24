import React from 'react'
import {useNavigate} from 'react-router-dom'

const Nav2 = () => {

    let navigate = useNavigate();
    

  return (
    <div className='bg-cyan-800'>
        <button 
            onClick={() => {
                navigate('/')
            }} 
            className='font-medium bg-emerald-800 m-5 py-2 px-4 rounded'>
                Return to Home
        </button>

        <button 
            onClick={() => {
                navigate(-1)
            }} 
            className='font-medium bg-emerald-800 py-2 px-5 rounded'>
                Back
        </button>

        <button 
            onClick={() => {
                navigate(+1)
            }} 
            className='m-5 font-medium bg-emerald-800 py-2 px-5 rounded'>
                Next
        </button>
    </div>
  )
}

export default Nav2