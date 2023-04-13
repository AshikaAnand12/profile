import React from 'react'
import './footer.css'
import SocialIcons from '../socialicons/SocialIcons'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ashika Anand Babu</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
        <SocialIcons position='footer__socialicons' />
        <div className="footer__copyright">
          <small>&copy; {new Date().getFullYear()} ASHIKA ANAND BABU - All Rights Reserved. Images created using Midjourney AI</small> <br/>
          <small>Inspiration from : https://youtu.be/G-Cr00UYokU </small>
        </div>
    </footer>
  )
}

export default Footer