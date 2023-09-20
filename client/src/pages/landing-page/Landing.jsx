import React from 'react';
import {Link}from 'react-router-dom';

export default function Landing() {
  return (
    <div>
        <h1>Welcome to AffirmMe</h1>
            <h3>Are you a new member?</h3> 

            <Link className="link" to="/register">
                <h2>Register</h2>     
            </Link>

            <h3>If not: </h3> 
            <Link className="link" to="/login">
                <h2>Log in</h2>
            </Link>
    </div>
  )
}

