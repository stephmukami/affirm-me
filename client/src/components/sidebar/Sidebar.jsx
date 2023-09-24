import React from 'react'
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
      </div>
    </>
    
  )
}

