import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {/* Logo and Options */}
          <div className="logo-and-options">
            <img src="Unknown.png" alt="Your Logo" className="logo" />
            <Button color="inherit">Home</Button>
            <Button color="inherit">Chat</Button>
            <Button color="inherit">App</Button>
          </div>

          {/* New profile section */}
          <div className="profile-section">
            {/* <img src="logo512.png" alt="Profile" className="profile-picture" /> */}
            <div className="profile-name">John Doe</div>
          </div>
        </Toolbar>
      </AppBar>

      {/* Other components and content */}
    </div>
  );
};

export default Navbar;