// student_dashboard.tsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AppGrid from './components/Apps';
import { Home } from '@mui/icons-material';
import HomeTask from './components/Home';

const StudentDashboard = () => {
  const [curr, setCurr] = useState('Home');

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setCurr(newValue);
  };

  return (
    <>
      <Navbar currentTab={curr} onTabChange={handleTabChange} />
      {curr === 'Home' ? <HomeTask /> : ""}
      {curr === 'Chat' ? <></> : ""}
      {curr === 'Apps' ? <AppGrid /> : ""}
    </>
  );
};

export default StudentDashboard;
