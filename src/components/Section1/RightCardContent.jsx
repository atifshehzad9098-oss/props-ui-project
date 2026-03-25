import React from 'react'
import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {

  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h1 className='bg-white h-12 w-12 rounded-full flex justify-center items-center text-2xl font-bold'>{props.id + 1}</h1>
        <div className='text-amber-100'>
            <p className='text-shadow-2xs text-md mb-5 leading-normal'>{props.intro}</p>
            <div className='flex justify-between items-center'>
                <button style={{backgroundColor:props.color}} className='rounded-full mt-5 px-10 py-2 cursor-pointer font-medium'>{props.tag}</button>
                <button style={{backgroundColor: props.color}} className='flex items-center mt-5 p-1 cursor-pointer bg-blue-600 rounded-full'><ArrowRight size={25} strokeWidth={1.5} absoluteStrokeWidth /></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
