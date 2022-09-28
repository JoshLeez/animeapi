import React from 'react'
import { useLocation } from 'react-router-dom'
import './Details.css'
function Details() {
  const {state}= useLocation();
  return (
    <>
    <div className="anime-card">
      <div className="container">
      <h2 className='card-title'>{state.data.title} <span>{state.data.type}</span></h2>
       <div className="synopsis">
      <img src={state.data.images.webp.large_image_url} alt={state.data.title}/>
      <div className="synopsis-word">
      <strong>Synopsis:</strong>
      <p>{state.data.synopsis}</p>
      </div>
      </div>
      </div>
    </div>
    <div className='video-card'>
    <h2>Trailer</h2>
    <iframe src={state.data.trailer.embed_url}className="the-video"  title="video"/>
    </div>
    </>
  )
}

export default Details