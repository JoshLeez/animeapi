import React from 'react'
import '../App.css'
import Anime from './Anime.jsx'
import Newest from './Newest'
import Upcoming from './Upcoming'
import Manga from './Manga'
function Home() {
  return (
    <>
     <div className="featured">
        <div className="featured-horizontal">
          <div className="featured-vertical">
            <div className="featured-content">
              <span className="featured-title">KIMETSU NO YAIBA</span>
              <span className="featured-text">
                Ever since the death of his father, the burden of supporting the
                family has fallen upon Tanjirou Kamado's shoulders. Though
                living impoverished on a remote mountain, the Kamado family are
                able to enjoy a relatively peaceful and happy life. One day,
                Tanjirou decides to go down to the local village to make a
                little money selling charcoal. On his way back, night falls,
                forcing Tanjirou to take shelter in the house of a strange man,
                who warns him of the existence of flesh-eating demons that lurk
                in the woods at night. When he finally arrives back home the
                next day, he is met with a horrifying sight—his whole family has
                been slaughtered. Worse still, the sole survivor is his sister
                Nezuko, who has been turned into a bloodthirsty demon. Consumed
                by rage and hatred, Tanjirou swears to avenge his family and
                stay by his only remaining sibling. Alongside the mysterious
                group calling themselves the Demon Slayer Corps, Tanjirou will
                do whatever it takes to slay the demons and protect the remnants
                of his beloved sister's humanity.
                <div className="details-button">
                  <span className="details">Details</span>
                  </div>
              </span>
            </div> 
          </div>
        </div>
      </div>
      <Anime/>
      <Newest/>
      <Upcoming/>
      <Manga/>
    </>
  )

}

export default Home