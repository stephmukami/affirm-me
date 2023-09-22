import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { UserProvider } from '../../Context/Context';
 export default function Home(){
    return (
        <UserProvider>
            <div>
                <Sidebar/>
                <Navbar/>
            </div>
        </UserProvider>
        
    )
 }