import React, {useEffect,useState} from 'react'
import './affirmationSection.css'
import axios from'axios';
import SingleAffirmation from './SingleAffirmation'
export default  function  AffirmationSection() {

  const [ affirmations,setAffirmations] = useState([]);
  //should it run once or?
  
  useEffect(() => {
    // Fetch affirmations for the logged-in user
    const fetchAffirmations = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:3000/api/affirmations');
            setAffirmations(response.data);
        } catch (error) {
            console.error('Error fetching affirmations:', error);
        }
    };

    fetchAffirmations();
}, []);
  return (
    <div className='affirmation-section'>
    <h3>Your Affirmations</h3>
    {affirmations.length > 0 ? (
        affirmations.map((affirmation) => (
            <SingleAffirmation key={affirmation._id} affirmation={affirmation.affirmation} />
        ))
    ) : (
        <p>Add new affirmation</p>
    )}
</div>
  );
}



