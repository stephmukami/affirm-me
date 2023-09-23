import React, {useContext,useState,useEffect} from 'react'
import { UserContext } from '../../Context/UserContext';
export default function Navbar() {

  const { userValue } = useContext(UserContext);
console.log(userValue);
  return (
    <>
      <div>
        {userValue && (
          <div>
            Hello, {userValue.username}. Token: {userValue.token}
          </div>
        )}
      </div>
    </>
  );
}