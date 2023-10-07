// Home.jsx
import React, { useContext, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { UserContext } from '../../Context/UserContext';
import AffirmationSection from '../../components/affirmation/AffirmationSection';
import './home.css';

export default function Home() {
  const { userValue, setUserValue } = useContext(UserContext);
  const [viewSidebar, setViewSidebar] = useState(true);

  const toggleSidebar = () => {
    setViewSidebar((prevViewSidebar) => !prevViewSidebar);
  };


  return (
    <UserContext.Provider value={{ userValue, setUserValue }}>
      <div>
        <Navbar />
        <div className="home-page">
          <Sidebar toggleSidebar={toggleSidebar} viewSidebar={viewSidebar} />
          {
  !viewSidebar && <button className ='toggle-btn' onClick={toggleSidebar}>Open Sidebar</button>
}

          <AffirmationSection />
        </div>
      </div>
    </UserContext.Provider>
  );
}
