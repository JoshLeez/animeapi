import React from 'react'
import './Contact.css'
import gmail from './images/gmail.png'
import linkedin from './images/linkedin.png'
function Contact() {
  return (
    <div className='contact-container'>
        <strong>Contact Me</strong>
        <div className='container-nesting'>
            <a href="https://github.com/JoshLeez" rel={"noreferrer"} target={'_blank'}><img className="contact-image" src='https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png' alt="github"/></a>
            <a href="mailto:joshlee@gmail.com" rel={"noreferrer"} target={'_blank'}><img className="contact-image" src={gmail} alt="gmail"/></a>
            <a href="https://www.linkedin.com/in/josh-lee-6522b1117/" rel={"noreferrer"} target={'_blank'}><img className="contact-image" src={linkedin} alt="linkedin"/></a>
        </div>
    </div>
  )
}

export default Contact