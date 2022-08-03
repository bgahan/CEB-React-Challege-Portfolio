import React from 'react';
import './portfolio.css';
import ProjectData from './projects'
import Project from '../../components/Project/Project';


const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h1>Portfolio</h1>
      <div className='projects'>
        {ProjectData.map(item => (
          <Project
            data={item}
          />
        ))}

      </div>
    </div>
  )
}

export default Portfolio