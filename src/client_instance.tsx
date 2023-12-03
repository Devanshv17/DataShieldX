import { FullFileBrowser } from 'chonky';
import { Link, useNavigate, useParams } from "react-router-dom";
import {Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Dialog, DialogTitle} from "@mui/material";
import {ExpandMore as ExpandMoreIcon} from "@mui/icons-material"
import { useState, useEffect } from "react";
import Extensions from "./client_extensions";
import { startTeamServer, stopTeamServer } from '../callbacks/client';
import Logs from './logs';
// import Storage from "./client_storage";

export default function Inst(props: any) {
	const {id} = useParams();
	const [started, setStarted] = useState(() => {
		// Initialize state from localStorage or default to false
		const storedState = localStorage.getItem(`team${id}_started`);
		return storedState ? JSON.parse(storedState) : false;
	});
	const [extDiag, toggleExtDiag] = useState(false);
	// const [filesDiag, toggleFilesDiag] = useState(false);
	const [files, setFiles] = useState([]);
	const [folderChain, setChain] = useState([]);
	const url = "google.com";
	const nav = useNavigate();

	useEffect(() => {
		// Save the current state to localStorage whenever it changes
		localStorage.setItem(`team${id}_started`, JSON.stringify(started));
	  }, [started, id]);

	const handleButtonClick = async () => {
		try {
		  if (started) {
			// Force Stop
			await stopTeamServer(id);
		  } else {
			// Start
			await startTeamServer(id);
		  }
	
		  // Update the state after successful request
		  setStarted(!started);
		} catch (error) {
		  console.error('Error:', error);
		  // Handle the error as needed
		}
	  };	

	return (
		<div style={{
			width:"100vw",
			minHeight:"100vh",
			backgroundColor:"#f6f6f6"}}>
			<Card sx={{
				display:"flex",
				flexDirection:"column",
				alignItems:"start",
				gap:"10px",
				width: "80%",
				height: "80%",
				margin:"auto",
				padding: 2,
			}}>
				<span>
					<Button variant="contained" style={{display:"inline"}} onClick={()=>{nav(-1)}}>Back</Button>
					<h1 style={{display:"inline", marginLeft:"30px"}}>{`Team ${id} server`}</h1>
				</span>
				<Button variant="contained" onClick={() => {toggleExtDiag(true)}}>Configure installed extensions</Button>
				{/*{<Button onClick={() => {toggleFilesDiag(!filesDiag)}}>View files</Button>}*/}
				<Dialog open={extDiag} onClose={()=>{toggleExtDiag(!extDiag)}} fullWidth={true} maxWidth="lg">
					<Box sx={{width: "100%"}}>
					<DialogTitle>Team {id} server extensions</DialogTitle>
					<Extensions teamid={id}/>
					</Box>
				</Dialog>
				{/*<Dialog open={filesDiag} onClose={() => {toggleFilesDiag(!filesDiag)}} fullWidth={true} maxWidth="lg">
									<Box sx={{width: "100%"}}>
									<DialogTitle>Team {id} files</DialogTitle>
									<Storage teamid={id}/>
									</Box>
								</Dialog>*/}
				<Box sx={{width:"100%"}}>
				<h2>Team Files</h2>
				<FullFileBrowser files={files} folderChain={folderChain}/>
				</Box>
				<Accordion sx={{width:"100%"}}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}><h5>Advanced Configuration</h5></AccordionSummary>
				<AccordionDetails>
				<Box sx={{
					display:"flex",
					flexDirection:"column",
					alignItems:"start",
					gap:"10px",
					width:"100%",
				}}>
				<h3>URL to server: {url}</h3>
				<h3>Logs: </h3>
				<Logs teamID={id}/>
				<Button variant="contained" onClick={handleButtonClick}>{started ? "Force Stop" : "Start"}</Button>
				</Box>
				</AccordionDetails>
				</Accordion>
			</Card>
		</div>
	);
}