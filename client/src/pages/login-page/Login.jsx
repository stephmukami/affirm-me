import React ,{useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom';
import axios from'axios';
import './login.css'
import { UserContext } from '../../Context/UserContext';
export default function Login(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {userValue,setUserValue} = useContext(UserContext);
    const [error,setError] = useState('')
 
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const res = await axios.post('http://127.0.0.1:3000/api/login' ,{
                username,
                password
            });

            const token = res.data.token;
            const updatedUserValue = {
                ...userValue,
                username,
                password,
                token
              };
              setUserValue(updatedUserValue);
            localStorage.setItem('token',token);
            localStorage.setItem('userValue', JSON.stringify(updatedUserValue));     
           setPassword('');
           setUsername('');
            res.data && window.location.replace("/home");
        }catch(err){
            console.log('error occurred');
            console.log(err);
            setError('Incorrect username or password');
            setPassword('');
            setUsername('');
        };
    }


    return(
        <div className='login-container'>
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
            <div className="buttons">
            <button type='submit'>LOGIN</button>
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