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
        
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Enter  new username</label>
            <input type="text" 
            value = {post}
            onChange = {(e)=>setPost(e.target.value)}

            />
            </div>
             <div>
            <label htmlFor="affirmation">Enter  new password</label>
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
