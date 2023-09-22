import React, {useContext,useState,useEffect} from 'react'
import { UserContext } from '../../Context/Context';

export default function Navbar() {
  const { context } = useContext(UserContext);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(context.username);
    console.log('Updated context:', context);  // Log the updated context here
  }, [context]);

  return (
    <>
      <div>
        <div>Hello, {username}</div>
      </div>
    </>
  );
}