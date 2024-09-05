import React from 'react';
import ProfilePic from '../assets/perfil.png';

export default function Profile() {
  return (
    
    <div className='w-full flex flex-col md:flex-row md:w-3/6 mt-20 md:mt-56 items-center shadow-2xl'>
       <div className='flex items-center justify-center md:w-1/2'>
            <img 
                src={ProfilePic} 
                alt='profile'
                className='rounded-full md:w-8/12 m-4 md:m-8'
            />
        </div> 
        <div className='ml-2 flex flex-col mr-4 md:mr-20 ms-1 md:w-1/2'>
            <p className='mb-2 text-center md:text-left'>Hi, I'm Leticia, currently based in Berlin 🇩🇪</p>
            <h4 className='text-center md:text-left'>As a 
                <strong className='text-orange'> Front-end Developer </strong>
                I enjoy biulding websites & web apps.
            </h4>
            <div className='mt-6 md:mt-9'>
                <h2 className='font-bold text-center md:text-left'>My focus is:</h2>
                <ul className='flex flex-wrap gap-4 uppercase mt-4 underline justify-center md:justify-start'>
                    <li className='text-blue'>React</li>
                    <li className='text-yellow'>JavaScript</li>
                    <li className='text-green'>Tailwind</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
