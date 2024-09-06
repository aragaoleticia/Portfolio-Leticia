import React from 'react';
import Profile from './Profile';
import ProjectsCard from './ProjectsCard';
import Navbar from './Navbar';

function Home() {

  return (
    <div className='flex justify-start items-center flex-col  w-full h-screen'>
      <Navbar/>
      <Profile/>
      <ProjectsCard/>
    </div>
  )
}

export default Home
