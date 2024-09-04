import React from 'react';
import ProfilePic from '../assets/perfil.png';

export default function Profile() {
  return (
    <div className='w-3/6 flex mt-56 items-center shadow-2xl'>
       <div className='flex items-center justify-center'>
            <img 
                src={ProfilePic} 
                alt='profile'
                className='rounded-full w-6/12 m-8'
            />
        </div> 
        <div className='ml-px flex flex-col mr-20 ms-1'>
            <p className='mb-px'>Hi, I'm Leticia, currently based in Berlin 🇩🇪</p>
            <h4>As a 
                <strong className='text-orange'> Front-end Developer </strong>
                I enjoy biulding websites & web apps.
            </h4>
            <div className='mt-9'>
                <h2 className='font-bold'>My focus is:</h2>
                <ul className='flex gap-4 uppercase mt-5 underline'>
                    <li className='text-blue'>React</li>
                    <li className='text-yellow'>JavaScript</li>
                    <li className='text-green'>Tailwind</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
