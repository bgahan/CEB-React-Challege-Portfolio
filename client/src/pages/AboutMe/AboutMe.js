import React from 'react';
import './aboutme.css';

const AboutMe = () => {
  return (
    <div className='about-me'>
      <h1>About Me</h1>
      <img src={require("../../images/profile-picture.png")} alt="brittany-avatar" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut numquam deserunt ipsum reprehenderit! Earum ipsum reprehenderit, totam accusamus labore deserunt blanditiis commodi sit sed ad tempore. Delectus, officiis molestias!</p>
    </div>
  )
}

export default AboutMe