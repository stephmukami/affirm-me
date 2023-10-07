import React from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'

export default function Sidebar({ toggleSidebar,viewSidebar }) {

  const handleLogout = ()=>{
  localStorage.clear();
    window.location.href = '/';
  };



  const sidebarStyle = {
    display: viewSidebar? 'flex' : 'none'
  };


  return (
    <>
    <div className='sidebar' style={sidebarStyle}>
      <h3>Quick Actions</h3>
      <Link to='/create' className='action'>
        <h4>Add new affirmation</h4>
      </Link>

    
      <Link className="link action" to="/home">
        <h4>Back to home</h4>
        </Link>
        <div className='log-out'>
            <h4  onClick={handleLogout}>Log out</h4>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>logout</title><path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" /></svg>
        </div>
        <h4 onClick={toggleSidebar}>Close sidebar</h4>
      </div>
    </>
    
  )
}

