// student_dashboard.tsx
import React, { useState } from 'react';
import Navbar from '@/Navbar';
import AppGrid from '@/Apps';
import HomeTask from '@/Home';
const StudentDashboard = () => {
    const [curr, setCurr] = useState('Home');
    const handleTabChange = (event, newValue) => {
        setCurr(newValue);
    };
    return (<>
      <Navbar currentTab={curr} onTabChange={handleTabChange}/>
      {curr === 'Home' ? <HomeTask /> : ""}
      {curr === 'Chat' ? <></> : ""}
      {curr === 'Apps' ? <AppGrid /> : ""}
    </>);
};
export default StudentDashboard;
