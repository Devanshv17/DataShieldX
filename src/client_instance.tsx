import { Link, useParams } from "react-router-dom";
import {Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Dialog, DialogTitle} from "@mui/material";
import {ExpandMore as ExpandMoreIcon} from "@mui/icons-material"
import { useState } from "react";

function Logs() {
	return (<Card style={{
		width:"90%",
		alignSelf:"center",
		padding: "10px",
		backgroundColor:"#ddd",
		fontFamily:'"Courier New", monospace',
	}}>
	Hello
	Goodbye		
	</Card>)
}

export default function Inst(props: any) {
	const {id} = useParams();
	const [started, setStarted] = useState(false);
	const [diag, toggleDiag] = useState(false);
	const url = "google.com";
	return (
		<div style={{
			width:"100%",
			height:"100%",
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
					<Link to="/"><Button variant="contained" style={{display:"inline"}}>Back</Button></Link>
					<h1 style={{display:"inline", marginLeft:"30px"}}>{`Team ${id} server`}</h1>
				</span>
				<Button variant="contained" onClick={() => {toggleDiag(true)}}>Configure installed extensions</Button>
				<Dialog open={diag} onClose={()=>{toggleDiag(!diag)}} fullWidth={true} maxWidth="lg">
					<Box sx={{width: "100%"}}>
					<DialogTitle>Team {id} server extensions</DialogTitle>
					</Box>
				</Dialog>
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
				<Logs />
				<Button variant="contained" onClick={() => setStarted(!started)}>{started ? "Force Stop" : "Start"}</Button>
				</Box>
				</AccordionDetails>
				</Accordion>
			</Card>
		</div>
	);
}