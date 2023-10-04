import React, {useContext,useState,useEffect} from 'react'
import { UserContext } from '../../Context/UserContext';
import './navbar.css'
export default function Navbar() {
  const { userValue } = useContext(UserContext);
  console.log(userValue);
  return (
    <>
      <div className='navbar'>
        {userValue && (
          <div>
            <h2>
              Hello, {userValue.username}. 😊 
            </h2>
          </div>
        )}
      </div>
    </>
  );
}