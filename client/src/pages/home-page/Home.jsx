import React ,{useContext}from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { UserContext } from '../../Context/UserContext';
import AffirmationSection from '../../components/affirmation/AffirmationSection';
 export default function Home(){
    const {userValue,setUserValue} = useContext(UserContext);
    return (
        <UserContext.Provider value={{userValue,setUserValue}}>
            <div>
                <Navbar/>
                <div className="home-page">
                <Sidebar/>
                 <AffirmationSection/>
                </div>
            </div>
        </UserContext.Provider>
        
    )
 }