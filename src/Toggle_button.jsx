import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

function ToggleSwitch() {
  // State variables to track the toggle state for each switch
  const [isToggled1, setIsToggled1] = useState(false);
  const [isToggled2, setIsToggled2] = useState(false);

  // Event handler to toggle the first switch
  const toggleSwitch1 = () => {
    // Check if switch 2 is off before toggling switch 1
    if (!isToggled2) {
      setIsToggled1(!isToggled1);
    }
  };

  // Event handler to toggle the second switch
  const toggleSwitch2 = () => {
    // Check if switch 1 is on before toggling switch 2
    if (isToggled1) {
      setIsToggled2(!isToggled2);
    }
  };

  // Styles
  const switchContainerStyle = {
    position: 'relative',
    display: 'inline-block',
    width: '60px', // Adjust the width as needed
    height: '34px', // Adjust the height as needed
    marginRight: '10px', // Add margin between the switches
  };

  const sliderStyle = {
    position: 'absolute',
    cursor: 'pointer',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: '#ccc', // Default background color when switch is off
    transition: '0.4s',
    borderRadius: '34px', // To make the switch round
  };

  const sliderBeforeStyle = {
    position: 'absolute',
    content: '',
    height: '26px',
    width: '26px',
    left: isToggled1 ? '30px' : '4px', // Adjust the positioning as needed
    bottom: '4px', // Adjust the positioning as needed
    backgroundColor: 'white', // Color of the switch
    transition: 'left 0.4s ease, background-color 0.4s ease', // Added transition properties
    borderRadius: '50%', // To make the switch round
  };

  const sliderBeforeStyle2 = {
    position: 'absolute',
    content: '',
    height: '26px',
    width: '26px',
    left: isToggled2 ? '30px' : '4px', // Adjust the positioning as needed
    bottom: '4px', // Adjust the positioning as needed
    backgroundColor: 'white', // Color of the switch
    transition: 'left 0.4s ease, background-color 0.4s ease', // Added transition properties
    borderRadius: '50%', // To make the switch round
  };

  // Profile picture style
  const profilePictureStyle1 = {
    position: 'absolute',
    left: '-480%', // Adjust the positioning as needed
    top: '125%', // Center vertically
    transform: 'translateY(-50%)', // Center vertically
    width: '40px', // Adjust the width as needed for a larger profile picture
    height: '40px', // Adjust the height as needed for a larger profile picture
    display: isToggled1 ? 'block' : 'none', // Show/hide based on switch state
  };

  // Profile picture style for the second static profile picture
  const profilePictureStyle2 = {
    position: 'absolute',
    
    left: '-510%', // Adjust the positioning as needed
    top: '125%', // Center vertically
    transform: 'translateY(-50%)', // Center vertically
    width: '40px', // Adjust the width as needed for a larger profile picture
    height: '40px',
    color: 'red', // Adjust the height as needed for a larger profile picture
  };

  // Profile picture style for the third static profile picture
  const profilePictureStyle3 = {
    Color: 'white',
    position: 'absolute',
    left: '-495%', // Adjust the positioning as needed
    top: '125%', // Center vertically
    transform: 'translateY(-50%)', // Center vertically
    width: '40px', // Adjust the width as needed for a larger profile picture
    height: '40px',
    color: 'blue', // Adjust the height as needed for a larger profile picture
  };
  return (
   
      <div>
      {/* First Toggle switch */}
      <label style={switchContainerStyle} className="switch">
        <input type="checkbox" checked={isToggled1} onChange={toggleSwitch1} />
        <span style={{ ...sliderStyle, backgroundColor: isToggled1 ? '#2196F3' : '#ccc' }}>
          <span style={sliderBeforeStyle}></span>
        </span>
      </label>

      {/* Second Toggle switch */}
      <label style={switchContainerStyle} className="switch">
        <input type="checkbox" checked={isToggled2} onChange={toggleSwitch2} disabled={!isToggled1} />
        <span style={{ ...sliderStyle, backgroundColor: isToggled2 ? '#2196F3' : '#ccc' }}>
          <span style={sliderBeforeStyle2}></span>
        </span>
      </label>

      {/* Status text for End */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', marginRight: '15px', marginLeft: '5px' }}>
        <span style={{}}>{isToggled1 ? 'STOP' : 'START'}</span>
        <span style={{}}>{isToggled2 ? 'REVERT' : 'FINISH '}</span>
      </div>
    </div>
  );
}

export default ToggleSwitch;
