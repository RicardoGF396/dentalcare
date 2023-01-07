import React from 'react'

function SliderCard( {name, number} ) {
  return (
    <div>
        <div className='relative w-[280px] h-[200px] glass-effect'>
        <h3 className='font-bold text-white text-2xl px-4 py-6'> {name} </h3>
        <div className='absolute bottom-6 right-8 px-4 py-2 border-2 border-white rounded-full'>
            <p className='text-white'> {number} </p>
        </div>
    </div>
    </div>
  )
}

export default SliderCard