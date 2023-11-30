import { Button, Card } from "@mui/material";
import { useState } from "react";

export default function App({teamid}) {
	console.log(teamid);
	const [ext, setExt] = useState([
		{
			name:"extension 1",
			desc:"description 1",
			status:"enabled"
		},
		{
			name:"extension 2",
			desc:"description",
			status:"disabled"
		}
	]);
	return(<div style={{
		width: "80%",
		display:"flex",
		gap:"10px",
		rowGap:"10px",
		padding:"10px"
	}}>
		{ext.map(el => (
			<Card>
				<h1>{el.name}</h1>
				<h5>{el.desc}</h5>
				<Button>View Details</Button>
				<Button>{el.status === "enabled"? "Disable" : "Enable"}</Button>
			</Card>
		))}
	</div>);
}