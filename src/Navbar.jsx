import React from 'react';
import { Tabs, Tab, Paper, IconButton, styled } from '@mui/material';
const CustomPaper = styled(Paper)({
    display: "flex",
    backgroundColor: "#FFFFFF",
    fontSize: "20px",
    fontFamily: "'Montseraat'",
    alignItems: "center",
    gap: "10px",
    paddingLeft: "10px",
    width: "100%",
    height: "75px",
    marginTop: "0",
    boxShadow: "0px 0px 5px 0px #D1D1D1",
    borderRadius: "10px",
});
const CustomIconButton = styled(IconButton)({
    marginRight: "10px",
});
const Navbar = ({ currentTab, onTabChange }) => {
    return (<CustomPaper elevation={1}>
      <img src="../photos/App-logo.jpg" alt="Company Logo" style={{ height: "40px" }}/>
      <p>v0.0.13</p>

      <Tabs value={currentTab} onChange={onTabChange} sx={{ flexGrow: 1 }}>
        <Tab label="Home" value="Home"/>
        <Tab label="Chat" value="Chat"/>
        <Tab label="Apps" value="Apps"/>
        
      </Tabs>

      
    </CustomPaper>);
};
export default Navbar;
