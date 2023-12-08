// student_dashboard.tsx
import React, { useState, useEffect } from 'react';
import Navbar from '@/Navbar';
import AppGrid from '@/Apps';
import Dashboard from '@/Home';
import Chat from '@/chat';

const StudentDashboard = () => {
  const [curr, setCurr] = useState('Dashboard');

  const handleTabChange = (event, newValue) => {
    setCurr(newValue);
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.event === 'login-with-token') {
        const { loginToken } = event.data;
        console.log('Received login token:', loginToken);
        // You can use the loginToken for further authentication or other actions
      }
    };
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Navbar currentTab={curr} onTabChange={handleTabChange} />

          <div style={{ flex: 1, overflow: 'hidden' }}>
              {curr === 'Chat' ? <Chat />:""}
              {curr === 'Dashboard' ? <Dashboard /> : ""}
              {curr === 'Apps' ? <AppGrid /> : ""}
          </div>
      </div>
  );
};

export default StudentDashboard;
