import React from 'react'


const Card = () => {
  const user = "Jai Karan";
  const age = 21;
  return (
    <div className='card'>
        <h1>I'm {user} </h1>
        <h2>I'm {age} years old</h2>
    </div>
  )
}

export default Card