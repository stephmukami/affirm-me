import React from 'react'
import {useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import axios from 'axios';
import './create.css';
function Create() {
    const [post,setPost] = useState('')
    const { userValue } = useContext(UserContext);
    const [confirm,setConfirm] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          // Get the username from the userValue context
          const username = userValue.username;
    
          // Make the POST request
          const response = await axios.post('http://127.0.0.1:3000/api/affirmations', {
            affirmation: post,
            author: username,  // Add the username to the request body
          });
    
          console.log('Affirmation created:', response.data);
          setConfirm('Affirmation posted successfully')
          setPost('');
        } catch (error) {
          console.error('Error creating affirmation:', error);
          setConfirm('Error posting affirmation,try again later')
          setPost('');
        }
      };
  return (
    <div className='create-container'>
      <h2>Add your affirmation</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className='text-div'>
            <input type="text" 
            value = {post}
            onChange = {(e)=>setPost(e.target.value)}
            placeholder='Enter affirmation'
            />
        </div>
        <div className="buttons">
          <button>SUBMIT</button>
          <Link className="link" to="/home">
                  <button>BACK</button>
          </Link>
        </div>
      </form>
      <p className='error'>{ confirm && confirm}</p>
     
    </div>
  )
}

export default Create
