import React, { useState } from 'react';

function ToggleSwitch() {
  // State variable to track the toggle state
  const [isToggled, setIsToggled] = useState(false);

  // State variable to track whether the "End Task" button was clicked
  const [endTaskClicked, setEndTaskClicked] = useState(false);

  // Event handler to toggle the switch
  const toggleSwitch = () => {
    // Check if the "End Task" button was clicked
    if (!endTaskClicked) {
      // If not, toggle the switch
      setIsToggled(!isToggled);
    } else {
      // Reset the "End Task" button click state
      setEndTaskClicked(false);
    }
  };

  // Event handler for ending the task
  const endTask = () => {
    // Set the "End Task" button click state to true
    setEndTaskClicked(true);

    // Check if the slider is in the "on" position
    if (isToggled) {
      // If it is, set it back to the "off" position
      setIsToggled(false);

      // Add logic to handle ending the task
      console.log('Task ended');
    }
  };

  // Styles
  const switchContainerStyle = {
    position: 'relative',
    display: 'inline-block',
    width: '60px', // Adjust the width as needed
    height: '34px', // Adjust the height as needed
  };

  const sliderStyle = {
    position: 'absolute',
    cursor: 'pointer',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: isToggled ? '#2196F3' : '#ccc', // Change background color when switch is toggled
    transition: '0.4s',
    borderRadius: '34px', // To make the switch round
  };

  const sliderBeforeStyle = {
    position: 'absolute',
    content: '',
    height: '26px',
    width: '26px',
    left: isToggled ? '30px' : '4px', // Adjust the positioning as needed
    bottom: '4px', // Adjust the positioning as needed
    backgroundColor: 'white', // Color of the switch
    transition: 'left 0.4s ease, background-color 0.4s ease', // Added transition properties
    borderRadius: '50%', // To make the switch round
  };

  const buttonStyle = {
    marginLeft: '10px', // Adjust the margin as needed
    width: '60px', // Same width as the switch
    height: '34px', // Same height as the switch
    backgroundColor: '#ccc', // Background color when button is inactive
    border: 'none',
    borderRadius: '34px', // To make the button round
    cursor: 'pointer',
    transition: '0.4s',
  };

  if (isToggled) {
    buttonStyle.backgroundColor = '#2196F3'; // Background color when switch is on
  }

  return (
    <div>
      {/* Toggle switch */}
      <label style={switchContainerStyle} className="switch">
        <input type="checkbox" checked={isToggled} onChange={toggleSwitch} />
        <span style={sliderStyle}>
          <span style={sliderBeforeStyle}></span>
        </span>
      </label>

      {/* End Task button */}
      <button style={buttonStyle} onClick={endTask}>
        End Task
      </button>

      <p style={{}}>{isToggled ? 'Stop Task' : 'Start Task'}</p>
    </div>
  );
}

export default ToggleSwitch;
