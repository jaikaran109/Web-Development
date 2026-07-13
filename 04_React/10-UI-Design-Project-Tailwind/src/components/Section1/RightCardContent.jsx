import React from 'react'
import {ArrowRight} from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <div className='bg-white rounded-full text-xl font-semibold h-12 w-12 flex justify-center items-center'>{props.id + 1}</div>
        <div>
            <p className='text-xl mb-14 leading-relaxed text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit sapiente autem labore commodi, sequi repudiandae?</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><ArrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent