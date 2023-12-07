import React from 'react';
import { Tabs, Tab, Paper, IconButton, styled } from '@mui/material';
import Image from 'next/image';


const CustomPaper = styled(Paper)({
  display: "flex",
  backgroundColor: "#FFFFFF",
  fontSize: "20px",
  fontFamily: "'Montserrat'",
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
  return (
    <CustomPaper elevation={1}>
      {/* Use the img element for the company logo */}
      <Image src="/assets/logo.jpg" alt="Company Logo" width="150" height="40" borderRadius="50%" />

      <p>v0.0.13</p>

      <Tabs value={currentTab} onChange={onTabChange} sx={{ flexGrow: 1 }}>
        <Tab label="Dashboard" value="Dashboard" />
        <Tab label="Chat" value="Chat" />
        <Tab label="Apps" value="Apps" />
      </Tabs>
    </CustomPaper>
  );
};

export default Navbar;
