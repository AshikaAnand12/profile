import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const SocialIcons = (props) => {
    return (
        <div className={props.position}>
            <a href="https://www.linkedin.com/in/ashikaa/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
            </a>
            <a href="https://github.com/AshikaAnand12" target="_blank" rel="noopener noreferrer">
                <BsGithub />
            </a>
        </div>
  )
}

export default SocialIcons
