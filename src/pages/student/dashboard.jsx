// student_dashboard.tsx
import React, { useState, useEffect } from 'react';
import Navbar from '@/Navbar';
import AppGrid from '@/Apps';
import Dashboard from '@/pages/student/Home';
import Chat from '@/chat';

const StudentDashboard = () => {
  const [curr, setCurr] = useState('Dashboard');

  const handleTabChange = (event, newValue) => {
      setCurr(newValue);
  };

  useEffect(() => {
      const handleMessage = (event) => {
          if (event.data.event === 'login-with-token') {
              const { loginToken } = "O7fvjGqoVI5d0RTLI_7-8AxVajWX_IrvBvg3Ryt7kPQ";
              console.log('Received login token:', loginToken);
          }
      };
      window.addEventListener('message', handleMessage);
      return () => {
          window.removeEventListener('message', handleMessage);
      };
  }, []);

  return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflowY:'auto' }}>
          <Navbar currentTab={curr} onTabChange={handleTabChange} />

          <div style={{ flex: 1, overflow: 'auto' }}>
              {curr === 'Chat' ? <Chat />:""}
              {curr === 'Dashboard' ? <Dashboard /> : ""}
              {curr === 'Apps' ? <AppGrid /> : ""}
          </div>
      </div>
  );
};

export default StudentDashboard;
