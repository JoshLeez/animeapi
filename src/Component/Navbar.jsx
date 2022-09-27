import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftnavbar'>
                <Link to="/">Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
        </div>
            <div className='rightnavbar'>
            <input placeholder='Search...'/>
            </div>
    </div>
  )
}

export default Navbar