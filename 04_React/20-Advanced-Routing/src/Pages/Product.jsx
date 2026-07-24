import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex gap-10 justify-center py-4'>
        <Link className='font-xl font-semibold' to='/product/men'>Mens</Link>
        <Link className='font-xl font-semibold' to='/product/women'>Women's</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Product