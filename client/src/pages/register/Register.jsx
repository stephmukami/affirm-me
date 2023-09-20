import React from 'react';
import {Link} from 'react-router-dom';
export default function Register(){
    return(
        <>
        <h2>Register as a new user</h2>
        <form action="">

            <div>
                <label htmlFor="username">Enter username</label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor="email">Enter email address</label>
                <input type="email" />
            </div>

            <div>
                <label htmlFor="password">password</label>
                <input type="password" />
            </div>
            
            <button type='submit'>REGISTER</button>
            <Link className="link" to="/">
                <button>BACK</button>
            </Link>
        </form>
        </>
    )
}