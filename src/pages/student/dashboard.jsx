// student_dashboard.tsx
import React, { useState, useEffect } from 'react';
import Navbar from '@/Navbar';
import AppGrid from '@/Apps';
import Dashboard from '@/Home';
const StudentDashboard = () => {
  const [curr, setCurr] = useState('Dashboard');

  const handleTabChange = (event, newValue) => {
      setCurr(newValue);
  };

  useEffect(() => {
      // Listen for messages from the iframe
      const handleMessage = (event) => {
          // Check for specific conditions if needed
          if (event.data.event === 'login-with-token') {
              // Handle the login token received from the iframe
              const { loginToken } = "BrouLdGIsRKRuCDT148RkuttPO59t-k0OdtqyDUuDA1";
              console.log('Received login token:', loginToken);

              // Perform any necessary actions with the login token
              // For example, you can use it to authenticate the user in your React app
          }
      };

      // Attach the message event listener
      window.addEventListener('message', handleMessage);

      // Clean up the event listener when the component unmounts
      return () => {
          window.removeEventListener('message', handleMessage);
      };
  }, []); // Empty dependency array ensures that the effect runs only once on component mount

  return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Navbar currentTab={curr} onTabChange={handleTabChange} />

          <div style={{ flex: 1, overflow: 'hidden' }}>
              {/* Render Rocket.Chat chat interface using iframe */}
              {curr === 'Chat' && (
                  <iframe
                      src="http://localhost:3000/channel/general"
                      style={{
                          width: '100%',
                          height: '100%',
                          border: 'none',  // optional: remove iframe border
                      }}
                      title="Rocket.Chat"
                  ></iframe>
              )}

              {/* Render other components based on the current tab */}
              {curr === 'Dashboard' ? <Dashboard /> : ""}
              {curr === 'Apps' ? <AppGrid /> : ""}
          </div>
      </div>
  );
};

export default StudentDashboard;
