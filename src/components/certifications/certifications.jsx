import React from 'react'
import AWS from '../../assets/aws.png'
import './certifications.css'
import GCP from '../../assets/gcp.png'
import MIC from '../../assets/mic.png'
function certifications() {
  return (
    <section id='certifications'>
      <h5>My Certifications </h5>
      <h2>I am certified in </h2>

      <div className="container certifications__container">
        <article className='certifications__item'>
          <div className="certifications__item-image">
            <img src={GCP} alt=""/>
          </div>
            <h3>Google Associate Cloud <br/>Engineer</h3>
            <div className="certifications__item-cta">
            <a href="https://www.credential.net/5b6dedeb-4719-401f-85a7-ec83419d5cea" className='btn btn-primary'target='_blank'>Verify Here</a>
          
          </div>
        </article>
        <article className='certifications__item'>
          <div className="certifications__item-image">
            <img src={AWS} alt=""/>
          </div>
            <h3>AWS Certified Solutions Architect Associate</h3>
            <div className="certifications__item-cta">
          <a href="https://www.credly.com/badges/ed3e6b1c-a4c3-44f9-a712-79f43d70e155?source=linked_in_profile" className='btn' target='_blank'>Verify Here</a>
           
          
          </div>
        </article>
        <article className='certifications__item'>
          <div className="certifications__item-image">
            <img src={MIC} alt=""/>
          </div>
            <h3>Microsoft Certified - Associate Data Engineer</h3>
          <div className="certifications__item-cta">
            <a href="https://www.credly.com/badges/b52287e2-1d55-446c-8fb0-f0a290ab0b78?source=linked_in_profile" className='btn btn-primary'target='_blank'>Verify Here</a>
          
          </div>
        </article>
      </div>
    </section>
  )
}

export default certifications