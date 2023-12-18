import { Autocomplete, TextField, Button, Card } from "@mui/material";
import { useState, useEffect } from "react";
import {getApps, updateProject} from "@/callbacks/client"


const Project = ({ project, setProject}) => {
	const [displayed, setDisplayed] = useState(project.apps);
	const [toAdd, setToAdd] = useState([]);
	const [installedAppsData, setInstalledAppsData] = useState([]);
    
	console.log("apps")
	console.log(project.apps)
	
	const handleDelete = (index) => {
		let newapps = displayed.toSpliced(index, 1);
		setDisplayed(newapps);
		console.log("new project obj:");
		console.log({
					...project,
					apps:newapps
		});
		//send update project post request to change apps
		(async () => {
			try {
				await updateProject({
					...project,
					apps:newapps
				})
				setProject({
					...project,
					apps:newapps
				})
			} catch (error) {
				console.error(error);
			}
		})();
	};
	
	useEffect(() => {
		(async () => {
			try {setInstalledAppsData(await getApps())} catch (error) {console.error(error)}
		})();
	}, []);
	
  return (
			<div style={{
			minWidth: "50%", 
			marginTop: '20px',
			padding: '10px',
			position:"relative",
			display:"flex",
			flexDirection:"column",
			gap:"10px",}}>
			  <h2>{project.name}</h2>
				<h3>Approved Apps:</h3>
				{displayed.map((app, index) => (
				<span key={index} style={{ marginRight: '5px' }}><div style={{ position: 'relative', display: 'inline-block' }}>
					<div style={{
						display:"flex",
						height: '40px',
						paddingLeft: '20px',
						paddingRight: '40px', // Increased paddingRight to accommodate the "x" button
						margin: '10px',
						borderRadius: '40px',
						backgroundColor: '#FFFFFF',
						color: '#1977d2',
						border: `2px solid #1977d2`,
						transition: 'background-color 0.3s ease, color 0.3s ease, border 0.3s ease',
						alignItems:"center"
					}}>
						{app.app_name}
					</div>
					<button
					onClick={(event) => {
						handleDelete(index);
						event.stopPropagation();
					}}
					style={{
						position: 'absolute',
						top: '50%',
						right: '15%', // Adjust as needed for positioning
						transform: 'translateY(-60%)',
						backgroundColor: '#FFFFFF',
						color: '#DDD',
						borderRadius: '50%',
						border: 'none',
						cursor: 'pointer',
						display: 'block',
						fontSize: '20px'
					}}>x</button>
				</div></span>))}
				<Autocomplete 
					multiple 
					options={installedAppsData.filter(el => {
						//if name is already in displayed, don't add
						let arr = displayed.map(el => el.app_name)
						if (arr.includes(el.app_name)) return false;
						else return true;
					}).map(el => {
						delete el.image;
						el.approval_status = "approved";
						return el;
					})}
					getOptionLabel={(option) => option.app_name}
					value={toAdd}
					onChange={(e, value) => {setToAdd(value)}}
					renderInput={(params) => <TextField {...params} label="Applications to Permit" />}
				/>
				<Button variant="contained" sx={{maxWidth:"200px"}} onClick={()=>{
					if (toAdd == []) return
					let newapps = [...displayed, ...toAdd]
					setDisplayed(newapps);
					console.log("new project obj:");
					console.log({
							...project,
							apps:newapps
					});
					//send update project post request to change apps
					(async () => {
					try {
		
						await updateProject({
							...project,
							apps:newapps
						})
						setToAdd([]);
						// fetchProjectAppsData();
// 								handleTabChange(null, curr);
					} catch (error) {
						console.error(error);
					}
					})();
				}}>Add Applications</Button>
      </div>);
};

export default Project;
