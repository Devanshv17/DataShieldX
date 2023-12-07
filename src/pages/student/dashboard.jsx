// student_dashboard.tsx
import React, { useState } from 'react';
import Navbar from '@/Navbar';
import AppGrid from '@/Apps';
import { Home } from '@mui/icons-material';
import Dashboard from '@/Home';

const StudentDashboard = () => {
  const [curr, setCurr] = useState('Dashboard');

  const handleTabChange = (event, newValue) => {
    setCurr(newValue);
  };

  return (
    <>
      <Navbar currentTab={curr} onTabChange={handleTabChange} />
      {curr === 'Dashboard' ? <Dashboard /> : ""}
      {curr === 'Chat' ? <></> : ""}
      {curr === 'Apps' ? <AppGrid /> : ""}
    </>
  );
};

export default StudentDashboard;
