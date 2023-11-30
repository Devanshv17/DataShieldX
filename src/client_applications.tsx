import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Dialog, Paper } from "@mui/material";
import { useState } from "react";

export default function App() {
	const apps = [
	{
		name:"app 1",
		desc:"desc 1",
		id: 0,
		teams: [1, 5, 7, 9]
	},
	{
		name:"app 2",
		desc:"desc 2",
		id: 1,
		teams: [1, 2, 3, 4]
	}
	];
	const requests = [
		{teamid:0, appid: 1}
	]
	const [appDisplay, setAppDisplay] : [any, any] = useState(null);
	return (
		<Box sx={{
			width: "100%",
			p: 1
		}}>
		<Accordion sx={{width:"80%"}}>
			<AccordionSummary expandIcon={<ExpandMore/>}>View App/Extension requests</AccordionSummary>
			<AccordionDetails>
				{requests.map(el => (<Card>
					<p>Team id {el.teamid} has requested use of {apps.filter(appel => (appel.id === el.appid))[0].name}</p>
					<Button>Approve</Button><Button>Deny</Button>

				</Card>))}
			</AccordionDetails>

		</Accordion>
		<Box sx={{
			width: "100%",
			display:"flex",
			flexWrap:"wrap",
			gap:"10px",
			p: 1,
			pt: 2
		}}>
			{apps.map(el => (<Card>
				<h1>{el.name}</h1>
				<h5>{el.desc}</h5>
				<Button onClick={() => {setAppDisplay(el)}}>View Details</Button>
			</Card>))}
			<Dialog open={(appDisplay !== null)} onClose={()=>{setAppDisplay(null)}} fullWidth={true} maxWidth="lg">
				{appDisplay !== null && <Card>
					<h1>{appDisplay.name}</h1>
				</Card>}
			</Dialog>
		</Box>
		</Box>
	);
}