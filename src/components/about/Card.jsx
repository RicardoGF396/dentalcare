import React from 'react'

function Card({circle, name, description}) {
  return (
    <div className='bg-[#F6F6F6] rounded-xl p-8 lg:h-full'>
        <div className='flex gap-x-5 mb-6'>
        <img src={circle} alt={name} />
        <h3 className='font-semibold text-3xl'>{name}</h3>
        </div>
        <p> {description} </p>
        
    </div>
  )
}

export default Card