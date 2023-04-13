import React from 'react'
import './nav.css'
import {AiFillHome, AiFillMail} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {BsFillLaptopFill} from 'react-icons/bs'
import {IoMdMail} from 'react-icons/io'
import {SiFiles} from 'react-icons/si'
import {useState} from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }><FaUserCircle /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><BsFillLaptopFill /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : '' }><SiFiles /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }><IoMdMail /></a>
    </nav>
  )
}

export default Nav