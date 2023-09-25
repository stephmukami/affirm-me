import React from 'react'
import './others.css'
function SingleSocial({affirmation,author,time}) {
  return (
    <>
        <div className='single-social'>
            <div a-text> 
                <p>{affirmation}</p>
            </div>
        <div className='social-details'>
            <p>{author}</p>
            <p>{time}</p>
        </div>
            

        </div>
    </>
   
  )
}

export default SingleSocial
