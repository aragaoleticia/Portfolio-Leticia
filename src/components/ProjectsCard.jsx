import React from 'react';
import { ProjectsItem } from '../data/data.js';
import Card from './Card.jsx';

export default function ProjectsCard() {

  return (
    <div className='w-full h-full mt-56'>

      <div className='text-center'>
        <h1 className='mb-24 font-bold text-4xl sm:text-5xl'>Projects I've worked on 🚀:</h1>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:px-52 gap-8 max-w-7xl mx-auto pb-10 px-3'>
        {ProjectsItem.map(({title, description, img, techs, id, liveDemo, github}) => (
          <Card 
            key={id}
            id={id}
            title={title}
            description={description}
            img={img}
            techs={techs}
            liveDemo={liveDemo}
            github={github}
          />
        ))}
      </div>
    </div>
  )
}

