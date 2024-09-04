import React from 'react';
import { ProjectsItem } from '../data/data.js';
import Card from './Card.jsx';

export default function ProjectsCard() {

  return (
    <div className='w-full h-full mt-56'>

      <div className='text-center'>
        <h1>Projects I've worked on:</h1>
      </div>

      <div className='grid grid-cols-2 gap-4 max-w-4xl mx-auto mb-20'>
        {ProjectsItem.map(({title, description, img, tech, id}) => (
          <Card 
            key={id}
            id={id}
            title={title}
            description={description}
            img={img}
            tech={tech}
          />
        ))}
      </div>
    </div>
  )
}

