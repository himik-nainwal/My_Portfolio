import React from 'react'
import './services.css'
import {BiCheck } from 'react-icons/bi'


const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Data Science</h3>
          </div>
          <ul className="service__list">
            <li>
             <BiCheck className="service__list-icon"/>
             <p>Exploratory Data Analysis (EDA)</p>
            </li>
            <li>
             <BiCheck className="service__list-icon"/>
             <p>Data Visualization</p>
            </li>
            <li>
             <BiCheck className="service__list-icon"/>
             <p>Machine Learning </p>
            </li>
            <li>
             <BiCheck className="service__list-icon"/>
             <p>Strong Data Intuition</p>
            </li>
            <li>
             <BiCheck className="service__list-icon"/>
             <p>Artificial Intelligence</p>
            </li>
            <li>
             <BiCheck className="service__list-icon"/>
             <p>Big Data (Hadoop and Spark)</p>
            </li>
          </ul>
        </article>
        {/* END of Data Science */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
             <BiCheck className="service__list-icon"/>
             <p>Frontend using React,HTML,CSS </p>
            </li>
            <li>
             <BiCheck className="service__list-icon"/>
             <p>Backend using NodeJS , Python</p>
            </li>
            <li>
             <BiCheck className="service__list-icon"/>
             <p>Database Management (MongoDB)</p>
            </li>
            <li>
             <BiCheck className="service__list-icon"/>
             <p>Making similar websites with addition of some features. </p>
            </li>
            
             {/* <li> <BiCheck className="service__list-icon"/>
             <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
             <BiCheck className="service__list-icon"/>
             <p>Lorem ipsum dolor sit amet.</p>
            </li> */}
          </ul>
        </article>
        {/* END of Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Cloud Computing</h3>
          </div>
          <ul className="service__list">
            <li>
             <BiCheck className="service__list-icon"/>
             <p>AWS || GCP || Azure </p>
            </li>
            <li>
             <BiCheck className="service__list-icon"/>
             <p>Cloud Engineering </p>
            </li>
            <li>
             <BiCheck className="service__list-icon"/>
             <p>Troubleshooting </p>
            </li>
            <li>
             <BiCheck className="service__list-icon"/>
             <p>Network Management </p>
            </li>
            {/* <li>
             <BiCheck className="service__list-icon"/>
             <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
             <BiCheck className="service__list-icon"/>
             <p>Lorem ipsum dolor sit amet.</p>
            </li> */}
          </ul>
        </article>
        {/* END of cloud computing */}
      </div>
    </section>
  )
}

export default Services