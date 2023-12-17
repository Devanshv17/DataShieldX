// student_dashboard.tsx
import React, { useState, useEffect } from 'react';
import Navbar from '@/Navbar';
import AppGrid from '@/Apps';
import Dashboard from '@/Home';
import Chat from '@/chat';
import {Dialog} from "@mui/material"
import {getProject} from "@/callbacks/student"

const StudentDashboard = () => {
  const [curr, setCurr] = useState('Dashboard');
  const [project, setProject] = useState("")
  const [loading, setLoading] = useState(true)
  
  useEffect(() => { //get id from localstorage + get project
		(async () => {
			if (typeof window === undefined) return; //do nothing during static pre-rendering
			let creds = localStorage.getItem("creds");
			console.log("creds")
			let id = undefined;
			if (creds) {
				creds = JSON.parse(creds);
				console.log(creds);
				id = creds.team
				console.log(id)
			}
			else {
				setLoading("error"); //error, no team number found
				return
			}
			//let the db verify if the id is really an id -> deal with its errors directly
			try {
				let temp = await getProject(id);
				console.log(temp);
				setProject(temp);
				setLoading(false);
				
			} catch (err) {
				console.error(err);
				setLoading("error");
			}
		})();
	}, []);
  

  const handleTabChange = (event, newValue) => {
    setCurr(newValue);
  };

	if (loading) return (
  	<>
  	<div>{/*loader*/}</div>
  	<div>Loading project data...</div>
  	<Dialog open={(loading === 'error')} onClose={() => {}}> {/*uncloseable error dialog*/}
  		<h1>Error loading project</h1>
  	</Dialog>
  	</>
  );
	else return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Navbar currentTab={curr} onTabChange={handleTabChange} />

          <div style={{ flex: 1, overflow: 'hidden' }}>
              {curr === 'Chat' ? <Chat />:""}
              {curr === 'Dashboard' ? <Dashboard project={project} setProject={setProject}/> : ""}
              {curr === 'Apps' ? <AppGrid project={project} setProject={setProject}/> : ""}
          </div>
      </div>
  );
};

export default StudentDashboard;
