import React from 'react'
import {useState,useContext,useEffect} from 'react';
import SingleSocial from './SingleSocial';
import { UserContext } from '../../Context/UserContext';
import axios from 'axios';
function Others() {
    
  const [ contents,setContents] = useState([]);
  const [social ,setSocial] = useState(true);
  const { userValue } = useContext(UserContext);
  const username = userValue.username;


useEffect(() => {
  const fetchAffirmations = async () => {
      try {
          if (username) {
              const response = await axios.get(`http://127.0.0.1:3000/api/affirmations`);
              setContents(response.data);
          }
      } catch (error) {
          console.error('Error fetching affirmations:', error);
      }
  };

  fetchAffirmations();
}, [username]);

  return (
    <div className='others-section'>
      <h3>Others users and their affirmations</h3>
    {contents.length > 0 ? (
        contents.map((content) => (
            <SingleSocial
            key={content._id} 
            affirmation={content.affirmation}
            author = {content.author}
            time = {content.updatedAt}
             />
        ))
    ) : (
        <p>Add new affirmation</p>
    )}
    </div>
  )
}

export default Others
