import React ,{useState,useEffect}from 'react'
import {Link} from 'react-router-dom';
import axios from'axios';
export default function Login(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const res = await axios.post('http://127.0.0.1:3000/api/login' ,{
                username,
                password
            });

            console.log(username)
            console.log(password)

            const token = res.data.token;
            localStorage.setItem('token',token);

            console.log('success');
            console.log(token);
           res.data && window.location.replace("/home");
        }catch(err){
            console.log('error occurred');
            console.log(err);
        };
    }



    return(
        <>
        <h2>Log in to your account</h2>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text"
                value = {username}
                onChange = {(e)=>setUsername(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password"
                 value = {password}
                 onChange = {(e)=>setPassword(e.target.value)}
                 />
            </div>
            <button type='submit'>LOGIN</button>
            <Link className="link" to="/">
                <button>BACK</button>
            </Link>
        </form>
        </>
    )
}

