import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port_1.png'
import IMG2 from '../../assets/em.png'
import JOV from '../../assets/jov.jpeg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work </h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
            <h3>Character Handwritten Recognition using Deep Learning</h3>
            <div className="portfolio__item-cta">
          <a href="https://github.com/himik-nainwal/Character-Handwritten-Recognition" className='btn' target='_blank'>Github</a>
            <a href="https://himik-nainwal-character-handwritten-recognition-app-bjznq1.streamlitapp.com/" className='btn btn-primary'target='_blank'>Live Demo</a>
          
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt=""/>
          </div>
            <h3>WebApp to detect emotional Text - Natural Language Processing</h3>
            <div className="portfolio__item-cta">
          <a href="https://github.com/himik-nainwal/WebApp-for-Emotion-Detection-from-Text-NLP-using-StreamLit" className='btn' target='_blank'>Github</a>
            <a href="https://share.streamlit.io/himik-nainwal/webapp-for-emotion-detection-from-text-nlp-using-streamlit/main/app.py" className='btn btn-primary'target='_blank'>Live Demo</a>
          
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={JOV} alt=""/>
          </div>
            <h3>Walmart Sales Forecasting using xgboost. EDA|| Vizualizations || XGB Regressor </h3>
          <div className="portfolio__item-cta-jov">

          <a href="https://jovian.ai/himithnainwal/walmart-store-sales-forcasting" className='btn' target='_blank'>Notebook</a>
          
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio