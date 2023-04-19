import React from 'react'
import './about.css'
import Ashika from '../../assets/ashika.jpg'
import {MdWork} from 'react-icons/md'
import {RiTeamFill} from 'react-icons/ri'


const About = () => {
  return (
    <section id='about'>
      <h3 className='text-light'>Get To Know</h3>
      <h2 className='text-light'> About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={Ashika} alt="Ashika Anand Babu" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <MdWork className='about__icon'/>
                <h5>Experience</h5>
                <small> +2 years </small>
              </article>
              <article className="about__card">
                <RiTeamFill className='about__icon'/>
                <h5>Projects</h5>
                <small>+3 Industry</small><br/>
                <small>+5 University</small>
              </article>
            </div>
            <p>
           I'm an experienced Full-Stack Software Engineer with a passion for designing, developing, and testing responsive web applications. I specialize in MERN stack development and have a solid track record of employing Agile methodologies to deliver high-quality solutions. <br/><br/>
           I'm also a graduate student at San Jose State University pursuing Master of Science degree in Software Engineering. GPA: 3.88/4.00
            </p>
            <a href="#contact" className="btn btn-primary">Mail Me</a>
          </div>
        </div>
    </section>
  )
}

export default About
