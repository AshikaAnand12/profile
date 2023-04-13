import React from 'react'
import './contact.css'
import { useRef } from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import {BsEnvelope} from 'react-icons/bs'


const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState("");
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dy5w4ci', 'template_7g96a5d', form.current, 'a6rG46J2dNna_z0NJ')
    setMsg("Thank you! I will get back to you soon :)")
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h3 className='text-light'>Interested in connecting with me?</h3>
      <h2 className='text-light'>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsEnvelope className="contact__option-icon"/>
            <h4>E-mail</h4>
            <h5>ashika.anandbabu@sjsu.edu</h5>
            <a href="mailto:ashika.anandbabu@sjsu.edu" >Send a Message</a>
          </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email ID" required />
            <textarea name="message" rows="7" required placeholder="Your Message"></textarea>
            <button type="submit" className="btn btn-primary">Send</button><span>{msg}</span>
          </form>
      </div>
    </section>
  )
}

export default Contact