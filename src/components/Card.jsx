import React from 'react';
import iconGitHub from '../assets/icon-github.png';
import iconHome from '../assets/icon-home.png';

export default function Card({title, description, img, techs, liveDemo, github}) {
  return (
    <div className='p-3 overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300'>
    <div className='px-6 py-4'>
        <h1 className='font-bold text-xl mb-4 text-gray-800 underline'>{title}</h1>
    </div>
    <div>
        <img src={img} 
        alt='project print' 
        className='w-full h-48 object-cover'/>
    </div>
    <div className='px-6 py-4'>
        <p className='text-base text-gray-600'>{description}</p>
    </div>
    <div className='px-6 py-4 flex-wrap gap-2'>
      {techs.map((tech, index) => (
        <span
            key={index}
            className={`px-3 py-1 font-bold text-sm underline uppercase ${
              index % 3 === 0 ? 'text-blue' : 
              index % 3 === 1 ? 'text-yellow' : 
              'text-green'
            }`}
        >
            {tech}
        </span>
      ))}
    </div>
    <div className='flex gap-4 mt-4 justify-center pb-6'>

        <a className='bg-orange text-white uppercase font-bold flex gap-2 py-2 px-4 rounded-md hover:bg-orange-400 transition duration-300' 
            rel='noreferrer'
            href={github}
            target="_blank"
        >
            <img src={iconGitHub} className='w-5' alt='gitHub icon'/>
            GitHub
        </a>

        <a className='bg-orange text-white uppercase font-bold flex gap-2 py-2 px-4 rounded-md hover:bg-orange-400 transition duration-300' 
            rel='noreferrer'
            href={liveDemo}
            target="_blank"
        >
            <img src={iconHome} className='w-5' alt='home icon'/>
            HomePage
        </a>
    </div>
    </div>
    
  )
}
