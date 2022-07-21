import React from 'react'
import './about.css'
import ME from '../../assets/ab.JPG' 
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'



const About = () => {
  const arr=['I love programming and learning new things in these areas.',<br/>,'I am someone who wants to keep learning to become the absolute expert on the topic. When I am part of a team people characterize me as a joyful and responsible person who is a pleasure to work with.',<br/>,'Currently I was been selected for Google Cloud Sprint Bootcamp where we worked on a project under the guidance of Google Mentors.']
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>


    <div className="container about__container">
      <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
      </div>
      <div className="about__content">
        <div className="about__cards">

          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>Fresher</small>
          </article>



          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Workshops</h5>
            <small>2 workshops attended </small>
          </article>




          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small> 4+ and going on</small>
          </article>

        </div>
        
        <p>
      {arr}
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About