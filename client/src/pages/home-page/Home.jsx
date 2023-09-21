import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
 export default function Home(){
    return (
        <>
        <div>
            <Sidebar/>
            <Navbar/>
        </div>
        </>
    )
 }