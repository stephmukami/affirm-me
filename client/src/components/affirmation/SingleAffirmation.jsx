import React, { useState } from 'react';
import axios from 'axios';  // Import Axios
import './affirmationSection.css';
import {useEffect,useContext} from 'react';
import { UserContext } from '../../Context/UserContext';

function SingleAffirmation({ affirmation, time, id, onAffirmationUpdated }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAffirmation, setEditedAffirmation] = useState(affirmation);
  const { userValue } = useContext(UserContext);

  //changing to text box mode
  const handleEditClick = () => {
    setIsEditing(true);
  };

  //submit updated post
  const handleSaveClick = () => {
    // Get the bearer token from your context
    const bearerToken = userValue.token;
  
    // Set up Axios with the authorization header
    const axiosInstance = axios.create({
      baseURL: 'http://127.0.0.1:3000', // Replace with your API URL
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}` // Include the bearer token
      }
    });
  
    // Make the PUT request using the configured Axios instance
    axiosInstance.put(`/api/affirmations/${id}`, { affirmation: editedAffirmation })
      .then(response => {
        console.log('Affirmation updated:', response.data);
        setIsEditing(false);
       //refresh page 
       window.location.reload();
      })
      .catch(error => {
        console.error('Error updating affirmation:', error);
      });
  };

  //delete affirmation
  const handleDelete = () => {
    // Get the bearer token from your context
    const bearerToken = userValue.token;
  
    // Set up Axios with the authorization header
    const axiosInstance = axios.create({
      baseURL: 'http://127.0.0.1:3000', // Replace with your API URL
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}` // Include the bearer token
      }
    });
  
    // Make the PUT request using the configured Axios instance
    axiosInstance.delete(`/api/affirmations/${id}`)
      .then(response => {
        console.log('Affirmation deleted:', response.data);
       //refresh page 
       window.location.reload();
      })
      .catch(error => {
        console.error('Error delete affirmation:', error);
      });
  };

  
  return (
    <>
      <div className='single-affirmation'>
        <div a-text>
          {isEditing ? (
            <textarea
              value={editedAffirmation}
              onChange={(e) => setEditedAffirmation(e.target.value)}
            />
          ) : (
            <p>{affirmation}</p>
          )}
          <p>{new Date(time).toDateString()}</p>
        </div>

        <div className='controls'>
          {isEditing ? (
            <button onClick={handleSaveClick}>Save</button>
          ) : (
            <svg className='edit-icon'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              onClick={handleEditClick}
            >
              <title>square-edit-outline</title>
              <path d='M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z' />
            </svg>
          )}
          <svg 
          className='delete-icon'
          onClick={handleDelete}
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg>
          <button>next</button>
        </div>
      </div>
    </>
  );
}

export default SingleAffirmation;
