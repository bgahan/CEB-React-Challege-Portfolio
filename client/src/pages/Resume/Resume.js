import React from 'react';
import './resume.css';

const Resume = () => {
  return (
    <div className='resume'>
      <h1>Resume</h1>
      <p>Download my <a href={require("../../images/resume.txt")} download="resume.txt">resume</a></p>
      <h2>Skills</h2>
      <div className='skills'>
        <ul> Front-End
          <li>HTML/CSS/Git</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>APIs</li>
          <li>JQuery</li>
          <li>JSON</li>
          <li>React</li>
        </ul>
        <ul>Back-End
          <li>Node</li>
          <li>Object-oriented programming</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  )
}

export default Resume