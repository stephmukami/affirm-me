import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import './register.css';

export default function Register(){
const [error,setError] = useState(false);
const [details,setDetails] = useState(
    {
        username:'',
        email:'',
        password: ''
        }
);

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setDetails((prevDetails)=> ({
        ...prevDetails,
        [name] :value
    })

    )
  };
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
        const res = await axios.post('https://new-affirm-me-backend.onrender.com/api/users',
            {
                username: details.username,
                email:details.email,
                password:details.password

            }
        );
        console.log('Submitted details:', details);
          res.data && window.location.replace("/login");
    }catch(err){
        setError(true);
        console.log("details are");
        console.log(details);
        console.log(err);
    };
  };
 

    return(
        <div className='register-container'>
        <h2>Register as a new user 🤩</h2>
        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="username">Enter username</label>
                <input 
                type="text"
                name = 'username'
                placeholder='unique username'
                value = {details.username}
                onChange={(e)=>handleChange(e)}
                 />
            </div>

            <div>
                <label htmlFor="email">Enter email address</label>
                <input type="email" 
                    name = 'email'
                    placeholder='email address'
                    value = {details.email}
                    onChange={(e)=>handleChange(e)}
                />
            </div>

            <div>
                <label htmlFor="password">Enter password</label>
                <input type="password" 
                name = 'password'
                placeholder='password'
                value = {details.password}
                onChange={(e)=>handleChange(e)}
                />
            </div>
            <div className="buttons">
            <button className='register-btn' type='submit'>REGISTER</button>
            <Link className="link" to="/">
                <button>BACK</button>
            </Link>
            </div>
        </form>
        <p className='error'>
        {error && error}
        </p>
        </div>
    )
}