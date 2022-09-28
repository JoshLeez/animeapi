import React from 'react'
import './About.css'
function About() {
  return (
    <div className='container-about'>
        <strong >
        Josh Lee
        </strong>
        <div>This Web was made by Josh Lee  in 2022.</div>
        <div>It was build for study and education purpose only and trying using React</div>
        <div>The website reference</div>
        <div className='about-button'>
        <a className='about' href='https://dribbble.com/shots/6823172-Anime-Streaming-Service-Design'  rel={"noreferrer"} target={'_blank'}>Click Me</a>
        </div>    
        <div className='about-api'>
        <span>The Project used Public API from JIKAN Rest API  </span>
        <div className='api-button'>
        <a className='apis' href='https://docs.api.jikan.moe/#tag/anime'  rel={"noreferrer"} target={'_blank'}>Click Me</a>
        </div>    
        </div>
    </div>
  )
}

export default About