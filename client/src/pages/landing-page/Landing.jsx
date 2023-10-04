import React from 'react';
import {Link}from 'react-router-dom';
import './landing.css'
export default function Landing() {
  return (
    <div className='landing-container'>
        <h1>Welcome to AffirmMe !😊</h1>
        <h4>A platform to keep track of your affirmations and positive thoughts.</h4>
            <h3>Are you a new member?</h3> 

            <Link className="link to-register" to="/register">
                <h2>Register</h2>     
            </Link>

            <h3>If not: </h3> 
            <Link className="link" to="/login">
                <h2>Log in</h2>
            </Link>
    </div>
  )
}

