import React from 'react'
import {useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import axios from 'axios';
function Edit() {
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
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="affirmation">Enter affirmation</label>
            <input type="text" 
            value = {post}
            onChange = {(e)=>setPost(e.target.value)}

            />
        </div>
        <button>SUBMIT</button>
      </form>
      <p>{ confirm && confirm}</p>
      <Link className="link" to="/home">
                <button>BACK</button>
        </Link>
    </div>
  )
}

export default Edit
