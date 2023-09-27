import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext';

function Edit() {
  const { userValue } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the request URL using the username
    const requestURL = `http://127.0.0.1:3000/users/${userValue.username}`;

    // Construct the request headers with the token
    const headers = {
      Authorization: `Bearer ${userValue.token}`
    };

    try {
      const response = await axios.put(requestURL, { username, password }, { headers });

      // Update the confirm state based on the response
      setConfirm('User details updated successfully!');
      console.log(response.data); // Log the updated user details
    } catch (error) {
      console.error('Error updating user details:', error);
      setConfirm('Error updating user details');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Enter new username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Enter new password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
      <p>{confirm && confirm}</p>
      <Link className="link" to="/home">
        <button>BACK</button>
      </Link>
    </div>
  );
}

export default Edit;
