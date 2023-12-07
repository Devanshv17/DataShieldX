// Import necessary dependencies
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from '../../Navbar';
import AppGrid from '../../Apps';
import HomeTask from '../../Home';

const StudentDashboard = () => {
    const [curr, setCurr] = useState('Home');

    const handleTabChange = (newValue) => {
        setCurr(newValue);
    };

    useEffect(() => {
        // Listen for messages from the iframe
        const handleMessage = (event) => {
            // Check for specific conditions if needed
            if (event.data.event === 'login-with-token') {
                // Handle the login token received from the iframe
                const { loginToken } = "O7fvjGqoVI5d0RTLI_7-8AxVajWX_IrvBvg3Ryt7kPQ";
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
        <>
            <Navbar currentTab={curr} onTabChange={handleTabChange} />

            {curr === 'Home' ? <HomeTask /> : ""}

            {/* Render Rocket.Chat chat interface using iframe */}
            {curr === 'Chat' ? (
                <iframe
                    src="http://localhost:3000/channel/general"
                    width="100%"
                    height="600"
                    title="Rocket.Chat"
                ></iframe>
            ) : ""}

            {curr === 'Apps' ? <AppGrid /> : ""}
        </>
    );
};
export default StudentDashboard;
