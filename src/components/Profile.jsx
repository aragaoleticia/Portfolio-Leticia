import React from 'react';
import ProfilePic from '../assets/perfil.png';
import { Skills } from '../data/data.js';

export default function Profile() {
  return (
    
    <div className='flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow-xl p-8 mt-9 mx-auto max-w-4xl'>
       <div className='flex justify-center md:w-1/4 md:justify-start' >
            <img 
                src={ProfilePic} 
                alt='profile'
                className='rounded-full border-4 border-gray-100 shadow-lg w-40 md:w-60 object-cover'
            />
        </div> 
        <div className='md:w-3/4 text-center md:text-left mt-4 md:mt-0 md:ml-8'>
            <h1 className='text-3xl font-bold text-main-color'>Hi, I'm Leticia</h1>
            <p className='text-gray-600 mt-2 text-lg'>
                Currently based in <span className='font-semibold'>Berlin 🇩🇪</span><br />
                As a <span className='font-semibold text-purple-700'>Front-end Developer</span> passionate about creating 
                beautiful, user-friendly websites and web apps. I specialize in JavaScript, React, 
                and Tailwind, and love turning ideas into clean, responsive interfaces that deliver great user experiences.
            </p>
            <div className='mt-4 md:flex gap-8 items-center'>
                <span className='text-gray-600 text-lg font-semibold'>My focus is:</span>
                {Skills.map(({id, name, className}) => (
                    <div key={id} className='flex gap-4 justify-center'>
                        <span key={id} className={className} >{name}</span>
                    </div>
            
                ))}
            </div>
        </div>
    </div>
  )
}
