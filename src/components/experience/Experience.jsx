import React from 'react'
import './experience.css'
import {BsPatchCheckFill } from 'react-icons/bs'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Technical Skills</h2>
      <div className='container experience__container'>

      <div className='experience__DataScience'>
      <h3> 
        Artificial Intelligence
      </h3>
      <div className="experience__content">
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div>
          <h4>Data Science</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div>
          <h4>Machine Learning</h4>
          <small className='text-light'>Intermediate</small>
          </div></article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div><h4>Big Data </h4>
          <small className='text-light'>Beginner</small>
          </div></article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div><h4>Deep Learning </h4>
          <small className='text-light'>Intermediate</small>
          </div></article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div><h4>Data Visualization</h4>
          <small className='text-light'>Expert</small>
          </div></article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div><h4>Data Analysis</h4>
          <small className='text-light'>Intermediate</small>
          </div></article>

      </div>
      </div>

    <div className='experience__frontend'>
      <h3> 
        Frontend Development
      </h3>
      <div className="experience__content">
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div><h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div></article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'  />
          <div><h4>CSS</h4>
          <small className='text-light'>Intermediate</small>
          </div></article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div><h4>Java Script</h4>
          
          <small className='text-light'>Intermediate</small>
          </div></article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div><h4>React</h4>
          <small className='text-light'>Intermediate</small>
          </div></article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div><h4>Bootstrap</h4>
          <small className='text-light'>Beginner</small>
          </div></article>

      </div>
      </div>
{/* END OF FRONTEND */}
      <div className='experience__backend'>
      <h3> 
        Backend Development
      </h3>
      <div className="experience__content">
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div><h4>Mongo DB</h4>
          <small className='text-light'>Beginner</small>
          </div></article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div><h4>PHP</h4>
          <small className='text-light'>Begineer</small>
          </div></article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div><h4>MySql</h4>
          <small className='text-light'>Intermediate</small>
          </div></article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div><h4>Python</h4>
          <small className='text-light'>Beginner</small>
          </div>
        </article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div><h4>NodeJS</h4>
          <small className='text-light'>Intermediate</small>
          </div></article>

      </div>
      
      </div>
      {/* END OF BACKEND */}
      <div className='experience__cloud'>
      <h3> 
        Cloud Computing
      </h3>
      <div className="experience__content">
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div><h4>AWS / GCP /Azure </h4>
          <small className='text-light'>Intermediate</small>
          </div></article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div><h4>DevOps</h4>
          <small className='text-light'>Begineer</small>
          </div></article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div><h4>APIs </h4>
          <small className='text-light'>Intermediate</small>
          </div></article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div><h4>Networking</h4>
          <small className='text-light'>Intermediate</small>
          </div></article>

        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' /><div>
          <div><h4>Database</h4>
          <small className='text-light'>Intermediate</small></div>
          </div></article>

      </div>
      
      </div>
      
      </div>
      
      
    </section>
  )
}

export default Experience