import React from 'react'
import {Link} from 'react-router-dom';
export default function Login(){
    return(
        <>
        <h2>Log in to your account</h2>
        <form action="">
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" />
            </div>
            <button type='submit'>LOGIN</button>
            <Link className="link" to="/">
                <button>BACK</button>
            </Link>
        </form>
        </>
    )
}

