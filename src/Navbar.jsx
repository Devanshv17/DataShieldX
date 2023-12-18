import React from 'react';
import { Tabs, Tab, Paper, IconButton, styled } from '@mui/material';
import Image from 'next/image';
import Link from "next/link";


const CustomPaper = styled(Paper)({
	position:"sticky",
	zIndex:"100",
  display: "flex",
  backgroundColor: "#FFFFFF",
  fontSize: "20px",
  fontFamily: "'Montserrat'",
  alignItems: "center",
  gap: "10px",
  paddingLeft:"10px",
  marginBottom:"10px",
  width: "100%",
  height: "75px",
  top:"0",
  boxShadow: "0px 0px 5px 0px #D1D1D1",
  borderRadius: "10px",
  boxSizing:"border-box"
});

const CustomIconButton = styled(IconButton)({
  marginRight: "10px",
});

const Navbar = ({ currentTab, onTabChange }) => {
	const tabsStyle = {
		height:"100%", 
		alignItems:"center",
		flexGrow: 1,
		"& .MuiTabs-flexContainer": {height:"100%"},
		"& .MuiTabs-scroller": {height:"100%"},
	}

  return (
  	<div style={{
  		position:"fixed",
  		top:"0",
  		width:"100%",
  		zIndex:"100",
  	}}>
			<Paper elevation={1} style={{
				position:"relative",
				zIndex:"100",
				display: "flex",
				backgroundColor: "#FFFFFF",
				fontSize: "20px",
				alignItems: "center",
				gap: "10px",
				paddingLeft:"10px",
				width: "98%",
				height: "75px",
				margin:"auto",
				marginTop:"5px",
				boxShadow: "0px 0px 5px 0px #D1D1D1",
				borderRadius: "20px",
				boxSizing:"border-box",
			}}>
				{/* Use the img element for the company logo */}
				<Link href="/client/dashboard" onClick={() => {onTabChange(null, "Dashboard")}}><img src="/assets/logo.jpg" alt="Company Logo" width="150" height="40" borderRadius="50%"/></Link>
				<h5 style={{fontSize:"20pt"}}>DataShieldX</h5>
					{["Dashboard", "Chat", "Apps"].includes(currentTab) ?
					(<Tabs value={currentTab} onChange={onTabChange} sx={tabsStyle}>
						<Tab label="Dashboard" value="Dashboard" />
						<Tab component="a" href={`${process.env.NEXT_PUBLIC_ROCKETCHAT}`} label="Chat" value="Chat" />
						<Tab label="Apps" value="Apps" />
					</Tabs>) :
					(<Tabs value={currentTab} onChange={onTabChange} sx={tabsStyle}>
						<Tab component="a" href="/client/dashboard" label="Dashboard" value="Dashboard" />
						<Tab component="a" href={`${process.env.NEXT_PUBLIC_ROCKETCHAT}`} label="Chat" value="Chat" />
						<Tab component="a" href="/client/dashboard?tab=Apps" label="Apps" value="Apps" />
					</Tabs>)}
			</Paper>
		</div>
  );
};

export default Navbar;
