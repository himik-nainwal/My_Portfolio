import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FaTumblrSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Himik Nainwal</a>

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    
    <div className="footer__socials">
      <a href="https://www.instagram.com/nature_feel_heaven/" target="_blank"><FiInstagram/></a>
      <a href="https://www.tumblr.com/blog/universality-himik"target="_blank"><FaTumblrSquare/></a>
      <a href="https://www.linkedin.com/in/himik-nainwal/" target="_blank"><BsLinkedin/></a>
    </div>


    <div className="footer__copyright">
      <small>&copy;2022 Himik Nainwal . All rights reserved</small>
    </div>

    </footer>
  )
}

export default Footer