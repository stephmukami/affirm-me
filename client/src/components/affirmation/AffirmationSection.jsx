import React, { useEffect, useState, useContext } from 'react';
import './affirmationSection.css';
import axios from 'axios';
import SingleAffirmation from './SingleAffirmation';
import { UserContext } from '../../Context/UserContext';

const AffirmationSection = () => {
  const [affirmations, setAffirmations] = useState([]);
  const [currentAffirmationIndex, setCurrentAffirmationIndex] = useState(0);

  const { userValue } = useContext(UserContext);
  const username = userValue.username;

  useEffect(() => {
    const fetchAffirmations = async () => {
      try {
        if (username) {
          const response = await axios.get(`https://new-affirm-me-backend.onrender.com/api/affirmations/${username}`);
          setAffirmations(response.data);
          setCurrentAffirmationIndex(0); // Reset current affirmation index when fetching new affirmations
        }
      } catch (error) {
        console.error('Error fetching affirmations:', error);
      }
    };

    fetchAffirmations();
  }, [username]);

  const getNextAffirmation = () => {
    const newIndex = Math.floor(Math.random() * affirmations.length);
    setCurrentAffirmationIndex(newIndex);
  };

  return (
    <div className='affirmation-section'>
      <h3>Your Affirmations 🥠</h3>
      {affirmations.length > 0 ? (
        <div>
          {currentAffirmationIndex !== null ? (
            <SingleAffirmation
              key={affirmations[currentAffirmationIndex]._id}
              affirmation={affirmations[currentAffirmationIndex].affirmation}
              time={affirmations[currentAffirmationIndex].updatedAt}
              id={affirmations[currentAffirmationIndex]._id}
              getNextAffirmation = {getNextAffirmation}
            />

          ) : (
            <p className='prompt'>Click "Next" to view an affirmation</p>
          )}
        </div>
      ) : (
        <p>Add new affirmation</p>
      )}
        <p className='prompt'>Click "Next" to view an affirmation</p>

    </div>
  );
};

export default AffirmationSection;
