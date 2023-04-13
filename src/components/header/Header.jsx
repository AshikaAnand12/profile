import React from 'react'
import Typical from 'react-typical'
import './header.css'
import ME from '../../assets/Ashika_logo.png'
import SocialIcons from '../socialicons/SocialIcons'
import CV from '../../assets/Resume.pdf'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h3 className='text-light'>Hi 👋, I'm  </h3>
        <h1 className='text-light'>Ashika Anand Babu</h1>
        {" "}
        <h3 className="mono text-light">
          <Typical
            loop={Infinity}
            steps={[
              "Full Stack Developer 💻",
              10000,
              "Front End Developer 🎨",
              10000,
              "Aspiring Data Science Engineer 📊",
              10000,
              ]}
              delay={1500}
            />
        </h3>
        <div className="cta">
          <a href={CV} className="btn" download>
              My Resume 
          </a>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
        <SocialIcons position='header__socialicons' />
        <div className="me">
          <img src={ME} alt="Ashika Anand Babu" />
        </div>
      </div>
    </header>
  )
}