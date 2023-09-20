import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
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
        const res = await axios.post('http://127.0.0.1:3000/api/users',
            {
                username: details.username,
                email:details.email,
                password:details.password

            }
        );
        console.log(details);
          res.data && window.location.replace("/login");
    }catch(err){
        setError(true);
        console.log("details are");
        console.log(details);
        console.log(err);
    };
  };
    async function test(){
        try{
            const res = await axios.get('http://127.0.0.1:3000/api/users');
            //console.log(res);
        }catch(err){
            console.log(err);
        };
    }
    test();

    return(
        <>
        <h2>Register as a new user</h2>
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
            
            <button type='submit'>REGISTER</button>
            <Link className="link" to="/">
                <button>BACK</button>
            </Link>
        </form>
        </>
    )
}