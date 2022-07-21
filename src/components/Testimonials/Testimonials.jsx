import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/AVTAR.jpg'
import ADI from '../../assets/adi.jpeg'
import KET from '../../assets/ket.jpeg'
import RAH from '../../assets/rah.jpeg'


// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>What others think about me </h5>
      <h2>A glimpse</h2>
      <Swiper className="container testimonials__container" modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={RAH} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Rahul Yadav</h5>
          <h6>FreeLancer and Data Science Scholar</h6>
            <small className='client__review'>
            Himik is a very sincere person and intelligent person. We're also working on a research paper together and his dedication and perseverance in that is 100%. He is person who takes initiative and also a very generous and humble person.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Aytlijha Chakrobarthy</h5>
          <h6>SDE Fintech Associate @ Fintract Global</h6>
            <small className='client__review'>
            I respect your problem solving skills and your ability to think out of the box to bring forth unique solutions to a problem. But what I respect even more is your perception - the way you try to understand the deeper question within a problem statement..
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={ADI} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Aditya Vardhan Painuly</h5>
          <h6>Freelancer and ML Scholar</h6>
            <small className='client__review'>
            Well rounded understanding of many domains including Data Science, Machine Learning, Web Development and Full Stack Web Development. He is having Team Player attitude and always ready to help in any problem.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={KET} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ketan Rai</h5>
          <h6>BTech Scholar</h6>
            <small className='client__review'>
            It wouldn't be an exaggeration to say that you are one of the most broadly qualified person I've met. Your knowledge spans across more than one domains and I admire that!
            </small>
        </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default Testimonial