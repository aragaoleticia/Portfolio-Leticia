import React from 'react';
import iconGitHub from '../assets/icon-github.png';
import iconHome from '../assets/icon-home.png';

export default function Card({title, description, img, techs, liveDemo, github}) {
  return (
    <div className='p-6 overflow-hidden shadow-xl max-w-md transform bg-gray-100 rounded-lg hover:scale-105 transition-transform duration-300'>
        <h2 className='font-bold text-2xl mb-4 text-gray-800 underline'>{title}</h2>
        <img src={img} 
        alt='project print' 
        className='w-full mb-6 object-cover'/>
  
        <p className='text-base text-gray-600 mb-4'>{description}</p>
    <div className='flex flex-wrap gap-2 mb-6'>
      {techs.map((tech, index) => (
        <span
            key={index}
            className={`font-semibold text-sm uppercase ${
              index % 3 === 0 ? 'text-purple-600' : 
              index % 3 === 1 ? 'text-yellow-600' : 
              'text-green-600'
            }`}
        >
            {tech}
        </span>
      ))}
    </div>
    <div className='flex gap-4 justify-center'>

        <a className='bg-orange text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300' 
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
