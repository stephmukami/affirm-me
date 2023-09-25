import React, {useEffect,useState,useContext} from 'react'
import './affirmationSection.css'
import axios from'axios';
import SingleAffirmation from './SingleAffirmation'
import { UserContext } from '../../Context/UserContext';
export default  function  AffirmationSection() {

  const [ affirmations,setAffirmations] = useState([]);
  //const [username, setUsername] = useState('');
  const { userValue } = useContext(UserContext);
  const username = userValue.username;


useEffect(() => {
  const fetchAffirmations = async () => {
      try {
          if (username) {
              const response = await axios.get(`http://127.0.0.1:3000/api/affirmations/${username}`);
              setAffirmations(response.data);
          }
      } catch (error) {
          console.error('Error fetching affirmations:', error);
      }
  };

  fetchAffirmations();
}, [username]);

  return (
    <div className='affirmation-section'>
    <h3>Your Affirmations</h3>
    {affirmations.length > 0 ? (
        affirmations.map((affirmation) => (
            <SingleAffirmation
             key={affirmation._id}
              affirmation={affirmation.affirmation}
              time = {affirmation.updatedAt}
               />
        ))
    ) : (
        <p>Add new affirmation</p>
    )}
</div>
  );
}


