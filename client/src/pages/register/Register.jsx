import React from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
export default function Register(){

    async function test(){
        try{
            const res = await axios.get('http://127.0.0.1:3000/api/users');
            console.log(res);
        }catch(err){
            console.log(err);
        };
    }
    test();

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