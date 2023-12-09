import { useState, useEffect} from "react";
import { Box, Button, Card, Paper, Tab, Tabs } from "@mui/material";
import AppWindow from "@/client_applications";
import ActiveProjects from "@/Active_projects";
import Navbar from "@/Navbar";
import Chat from "@/chat";

// Function component for the App
export default function App(className, id) {
  const [curr, setCurr] = useState("Dashboard");
  const projects = Array(10).fill(null).map((_, i) => ({
    name: `Project ${i + 1} Name`,
    text: "**Project Description**",
  }));

  // Event handler for tab change
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
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Navbar currentTab={curr} onTabChange={handleTabChange} />

        <div style={{ flex: 1, overflow: 'hidden' }}>
            {curr === 'Chat' ? <Chat />:""}
            {curr === 'Dashboard' ? (<ActiveProjects projects={projects} />
        ) : (
          ""
        )}
            {curr === 'Apps' ? <AppWindow /> : ""}
        </div>
    </div>
);
}


