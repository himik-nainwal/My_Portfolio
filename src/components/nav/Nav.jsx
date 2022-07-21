import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'
import {AiFillProject} from 'react-icons/ai'
import {FaUserFriends} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav==='#' ?'active':''}><FaHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav==='#about' ?'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience' ?'active':''}><BiBook/></a>
      {/* <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav==='#services' ?'active':''}><RiServiceLine/></a> */}
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav==='#portfolio' ?'active':''}><AiFillProject/></a>
      {/* <a href="#testimonials" onClick={()=> setActiveNav('#testimonials')} className={activeNav==='#testimonials' ?'active':''}><FaUserFriends/></a> */}
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ?'active':''}><BiMessageSquareDetail/></a>
      </nav>
  )
}

export default Nav