import React from 'react'
import './experience.css'
import {BsCheckSquareFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h3 className='text-light'>Technologies I have used</h3>
      <h2 className="text-light">
        My Skillset
      </h2>
      <div className="container experience__container">
        <div className="experience__title-ti">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            <article className="experience__details" title='HTML'>
              <div>
                <BsCheckSquareFill className='experience__details-icon' />
                <h5>HTML5</h5>
              </div>
              Advanced
            </article>
            <article className="experience__details" title='Bootstrap, Tailwind, SASS, Foundation, Frameworks e Metodologias'>
              <div>
                <BsCheckSquareFill className='experience__details-icon' />
                <h5>CSS</h5>
              </div>
            Advanced
            </article>
            <article className="experience__details" title='DOM, APIs, JSON'>
              <div>
                <BsCheckSquareFill className='experience__details-icon' />
                <h5 title='Vanilla, ES5, ES6, Jquery'>JavaScript</h5>
              </div>
            Advanced 
            </article>
            <article className="experience__details">
              <div>
                <BsCheckSquareFill className='experience__details-icon' />
                <h5 title='ReactJS, React Native'>React</h5>
              </div>
            Advanced
            </article>
            <article className="experience__details" title='Redux, Saga, State Management, API'>
              <div>
                <BsCheckSquareFill className='experience__details-icon' />
                <h5>Redux, Saga</h5>
              </div>
            Intermediate 
            </article>
            <article className="experience__details" title='Axios, Amplify, API, Deployment, AWS'>
              <div>
                <BsCheckSquareFill className='experience__details-icon' />
                <h5>Axios, Amplify</h5>
              </div>
            Intermediate
            </article>
          </div>
        </div>
        <div className="experience__mkt-edu">
          <h3>Back End Development</h3>
          <div className="experience__content">
          <article className="experience__details" title=''>
              <div>
                <BsCheckSquareFill className='experience__details-icon' />
                <h5>NodeJS</h5>
              </div>
              Advanced
            </article>
            <article className="experience__details">
              <div>
                <BsCheckSquareFill className='experience__details-icon' />
                <h5>Python</h5>
              </div>
            Advanced
            </article>
            <article className="experience__details">
              <div>
                <BsCheckSquareFill className='experience__details-icon' />
                <h5>JAVA</h5>
              </div>
            Beginner
            </article>
            <article className="experience__details">
              <div>
                <BsCheckSquareFill className='experience__details-icon' />
                <h5>MySQL, NoSQL</h5>
              </div>
            Intermediate
            </article>
                        
            <article className="experience__details">
              <div>
                <BsCheckSquareFill className='experience__details-icon' />
                <h5>System Design</h5>
              </div>
            Beginner 
            </article>
            <article className="experience__details">
              <div>
                <BsCheckSquareFill className='experience__details-icon' />
                <h5>AWS, JWT, oAuth</h5>
              </div>
            Intermediate
            </article>
          </div>
        </div>
        <div className="experience__mkt-edu">
          <h3>Data Science & More</h3>
          <div className="experience__content">
          <article className="experience__details">
              <div>
                <BsCheckSquareFill className='experience__details-icon' />
                <h5>NumPy</h5>
              </div>
            Intermediate
            </article>
            <article className="experience__details">
              <div>
                <BsCheckSquareFill className='experience__details-icon' />
                <h5>Pandas</h5>
              </div>
            Intermediate
            </article>
            <article className="experience__details">
              <div>
                <BsCheckSquareFill className='experience__details-icon' />
                <h5>Tableau, PowerBI</h5>
              </div>
              Beginner
            </article>
            
            <article className="experience__details">
              <div>
                <BsCheckSquareFill className='experience__details-icon' />
                <h5>Data Visualization</h5>
              </div>
              Intermediate
            </article>
            <article className="experience__details">
              <div>
                <BsCheckSquareFill className='experience__details-icon' />
                <h5>WireFrames, GitHub, Unix</h5>
              </div>
            Intermediate
            </article>
            
          </div>
        </div>
      </div>  
    </section>
  )
}

export default Experience