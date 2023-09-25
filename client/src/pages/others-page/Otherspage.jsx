import React ,{useContext}from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { UserContext } from '../../Context/UserContext';
import './otherspage.css' 
import Others from '../../components/affirmation/Others';
export default function OthersPage(){
    const {userValue,setUserValue} = useContext(UserContext);
    return (
        <UserContext.Provider value={{userValue,setUserValue}}>
            <div>
                <Navbar/>
                <div className="others-page">
                <Sidebar/>
                <Others/>
                </div>
            </div>
        </UserContext.Provider>
        
    )
 }