import React from 'react';


export default function Card({title, description, img, tech}) {
  return (
    <div className='p-12 rounded overflow-hidden shadow-lg bg-greenLight'>
    <div className='px-6 py-4'>
        <h1 className='font-bold text-xl mb-2 underline'>{title}</h1>
    </div>
    <div>
        <img src={img} 
        alt='project print' 
        className='w-full h-48 object-cover border'/>
    </div>
    <div>
        <p className='text-gray-700 text-base mt-6 mb-6'>{description}</p>
    </div>
    <div>
        {tech}
    </div>
    </div>
    
  )
}
