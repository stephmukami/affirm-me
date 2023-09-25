import React from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'
export default function Sidebar() {

  const handleLogout = ()=>{
  localStorage.clear();
    window.location.href = '/';
  };

  return (
    <>
    <div className='sidebar'>
      SIDEBAR
      <button onClick={handleLogout}>LOG OUT</button>
      <Link to='/create'>
        <button>ADD NEW AFFIRMATION</button>
      </Link>

      <Link to='/others'>
        <button>VIEW OTHERS USERS</button>
      </Link>

      <Link className="link" to="/home">
                <button>BACK TO HOME</button>
        </Link>
      </div>
    </>
    
  )
}

