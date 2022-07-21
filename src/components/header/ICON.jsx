import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'

const ICON = () => {
  return (
    <div className='icon'>
        <a href="https://www.linkedin.com/in/himik-nainwal/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/himik-nainwal" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/nature_feel_heaven/" target="_blank"><AiOutlineInstagram/></a>
        
    </div>
      )
}

export default ICON