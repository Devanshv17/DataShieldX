// HomeTask.jsx
import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import GanttChart from '@/GanttChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'




const Dashboard = () => {
  const [isTasksExpanded, setIsTasksExpanded] = useState(false);
  const [isBacklogExpanded, setIsBacklogExpanded] = useState(false);
  const [expandedCards, setExpandedCards] = useState([]); 
  const [isMilestonesExpanded, setIsMilestonesExpanded] = useState(false);
  

  const handleMilestones = () => {
    setIsMilestonesExpanded(!isMilestonesExpanded);
  };

  const handleToggleTasks = () => {
    setIsTasksExpanded(!isTasksExpanded);
  };


  const handleToggleMLCard = (index) => {
    const newExpandedCards = [...expandedCards];
    newExpandedCards[index] = !newExpandedCards[index];
    setExpandedCards(newExpandedCards);
  };

  const milestoneData = [
    {
      id: 1,
      title: 'Milestone 1',
      project: {
        description: 'Project 1 description...',
        expectedCompletion: '2 days',
      },
      tasks: [
        { id: 1, title: 'Task 1', description: 'Task 1 description...' },
        { id: 2, title: 'Task 2', description: 'Task 2 description...' },
        { id: 3, title: 'Task 3', description: 'Task 3 description...' },
      ],
    },

    {
      id: 2,
      title: 'Milestone 2',
      project: {
        description: 'Project 2 description...',
        expectedCompletion: '3 days',
      },
      tasks: [
        { id: 1, title: 'Task 1', description: 'Task 1 description...' },
        { id: 2, title: 'Task 2', description: 'Task 2 description...' },
        { id: 3, title: 'Task 3', description: 'Task 3 description...' },
      ],
    },

    {
      id: 1,
      title: 'Milestone 3',
      project: {
        description: 'Project 3 description...',
        expectedCompletion: '4 days',
      },
      tasks: [
        { id: 1, title: 'Task 1', description: 'Task 1 description...' },
        { id: 2, title: 'Task 2', description: 'Task 2 description...' },
        { id: 3, title: 'Task 3', description: 'Task 3 description...' },
      ],
    },
    // ... (additional milestones)
  ];


  

  return (
    <div style={{ display: 'flex', overflowY: 'auto', maxHeight: '90vh' }}>
      <div style={{ flex: '0 0 63%', maxWidth: '63%', marginRight: '16px', marginTop: '16px', backgroundColor: "#FBF8F8", boxShadow: "0px 0px 5px 0px #D1D1D1", padding: '16px', borderRadius: '10px', overflowY: 'auto' }}>
        {/* Card 1 */}
        <div style={{ borderRadius: '10px', backgroundColor: '#FFFFFF', width: '100%', boxShadow: "0px 0px 5px 0px #D1D1D1" }}>
          <GanttChart style={{ width: '100%' }} />
        </div>

        <Box
          border="1px solid #ddd"
          borderRadius="10px"
          p={2}
          sx={{
            backgroundColor: "#FFFFFF",
            marginTop: '16px',
            maxWidth: '100%',
            boxShadow: "0px 0px 5px 0px #D1D1D1",
            cursor: 'pointer',
            overflowY: 'auto',
            maxHeight: '700px', // Set a specific height for the content
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflowY: 'auto' }} onClick={handleMilestones}>
            <h2>Milestones</h2>
            <span style={{ transform: isMilestonesExpanded ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>▶</span>
          </div>

          {isMilestonesExpanded && (
            <div style={{ marginTop: '8px' }}>
              {milestoneData.map((milestone, index) => (
                <MLTCard
                  key={`milestoneLeftCard${milestone.id}`}
                  milestone={milestone}
                  isExpanded={expandedCards[index]}
                  onClick={() => handleToggleMLCard(index)}
                />
              ))}
            </div>
          )}
        </Box>
      </div>

      <div style={{ flex: '0 0 32%', maxWidth: '32%', marginRight: '32px', marginLeft: 'auto', backgroundColor: "#FBF8F8", boxShadow: "0px 0px 5px 0px #D1D1D1", padding: '16px', borderRadius: '10px', overflowY: 'auto' }}>
        {/* Card 1 */}
        <Box border="1px solid #ddd" borderRadius="10px" p={2} sx={{ backgroundColor: "#FFFFFF", maxWidth: '100%', boxShadow: "0px 0px 5px 0px #D1D1D1" }}>
          <h2>Next Milestone Deadline</h2>
          <p style={{ fontSize: '20px' }}>Name: <span style={{ fontSize: '14px' }}>Project 1</span></p>
          <p style={{ fontSize: '20px' }}>Deadline: <span style={{ fontSize: '14px' }}>2021-10-20</span></p>
          <p style={{ fontSize: '20px' }}>Time: <span style={{ fontSize: '14px' }}>2d 3h 5m</span></p>
        </Box>

        <Box border="1px solid #ddd" borderRadius="10px" p={2} sx={{ backgroundColor: "#FFFFFF", maxWidth: '100%', boxShadow: "0px 0px 5px 0px #D1D1D1" }}>
          <h2>Recived Payments</h2>
          <p style={{ fontSize: '40px', textAlign:'center' }}> $2000</p>
         
        </Box>


        {/* Active Tasks Card */}
        <Box
          border="1px solid #ddd"
          borderRadius="10px"
          p={2}
          sx={{
            backgroundColor: "#FFFFFF",
            marginTop: '16px',
            maxWidth: '100%',
            boxShadow: "0px 0px 5px 0px #D1D1D1",
            cursor: 'pointer',
          }}
          onClick={handleToggleTasks}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Active Tasks</h2>
            <span style={{ transform: isTasksExpanded ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>▶</span>
          </div>
          {isTasksExpanded && (
            <div style={{ marginTop: '8px' }}>
              {/* Task Cards */}
              <div style={{ backgroundColor: "#FFFFFF", boxShadow: "0px 0px 5px 0px #D1D1D1", padding: '16px', borderRadius: '10px' }}>
                <h2>Task 1</h2>
                {/* Add content for Task 1 as needed */}
              </div>
              <div style={{ backgroundColor: "#FFFFFF", boxShadow: "0px 0px 5px 0px #D1D1D1", padding: '16px', borderRadius: '10px', marginTop: '16px' }}>
                <h2>Task 2</h2>
                {/* Add content for Task 2 as needed */}
              </div>
              <div style={{ backgroundColor: "#FFFFFF", boxShadow: "0px 0px 5px 0px #D1D1D1", padding: '16px', borderRadius: '10px', marginTop: '16px' }}>
                <h2>Task 3</h2>
                {/* Add content for Task 3 as needed */}
              </div>
            </div>
          )}
        </Box>

        {/* Backlog Tasks Card */}
        
      </div>
    </div>
  );
};

const MLTCard = ({ milestone, isExpanded, onClick }) => {

  
  const [showAddTaskPopup, setShowAddTaskPopup] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = () => {
    setShowAddTaskPopup(true);
  };

  const handleAddTaskSubmit = () => {
    // Add the new task to your task list
    // You should have a function for updating the task list in your component's state
    // e.g., updateTasks([...tasks, { id: generateUniqueId(), title: newTaskName, description: newTaskDescription }]);
    
    // Clear the input fields
    setNewTaskName('');
    setNewTaskDescription('');

    // Hide the add task popup
    setShowAddTaskPopup(false);
  };

  

  const profilePictureStyle1 = {
    position: 'absolute',
    left: '40px',
    top: '125%',
    transform: 'translateY(-20%)',
    width: '40px',
    height: '40px',
    
  };

  const profilePictureStyle2 = {
    position: 'absolute',
    left: '20px',
    top: '130%',
    transform: 'translateY(-20%)',
    width: '40px',
    height: '40px',
    color: 'red',
  };

  const profilePictureStyle3 = {
    position: 'absolute',
    left: '0%',
    top: '125%',
    transform: 'translateY(-20%)',
    width: '40px',
    height: '40px',
    color: 'blue',
  };

  return (
    <Box
  border="1px solid #ddd"
  borderRadius="10px"
  p={2}
  sx={{
    backgroundColor: "#FFFFFF",
    marginTop: '16px',
    maxWidth: '100%',
    boxShadow: "0px 0px 5px 0px #D1D1D1",
    cursor: 'pointer',
  }}
>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
    <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column' }} onClick={onClick}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>
          <div>
            <h2>{milestone.title}</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <span style={{ fontSize: '20px', color: '#555', marginBottom: '8px' }}>
              <b>Project Description:</b> {milestone.project.description}
            </span>
            <span style={{ fontSize: '20px', color: '#555', marginBottom: '8px', marginLeft: '16px' }}>
              <b>Expected Completion:</b> {milestone.project.expectedCompletion}
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Add Task Button */}
          <button onClick={handleAddTask} style={{ fontSize: '16px', padding: '8px', backgroundColor: '#1977d2', color: 'white', borderRadius: '5px', cursor: 'pointer' }}>
            Add Task
          </button>

          <span style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)', fontSize: '24px', transition: 'transform 0.3s ease', marginLeft: '8px' }}>▶</span>
        </div>
      </div>
    </div>
  </div>


      {isExpanded && (
        <div style={{ marginTop: '8px'}}>
          {milestone.tasks.map((task) => (
            <div key={`task-${task.id}`} style={{ display: 'flex', alignItems: 'center', backgroundColor: "#FFFFFF", boxShadow: "0px 0px 5px 0px #D1D1D1", padding: '16px', borderRadius: '10px', marginTop: '16px' }}>
              <div style={{ flex: 1 }}>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <div style={{ position: 'relative' }}>
                  <AccountCircleIcon style={profilePictureStyle1} />
                  <AccountCircleIcon style={profilePictureStyle2} />
                  <AccountCircleIcon style={profilePictureStyle3} />
                </div>
                <p><br/></p>
              </div>
              <ToggleSwitch />
            </div>
          ))}
        </div>
      )}

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column' }} onClick={onClick}>
          {/* Existing code */}
        </div>
      </div>

      {/* Add Task Popup */}
      {showAddTaskPopup && (
        <div style={{ position: 'fixed',top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: 'inherit' ,backgroundColor: 'white', padding: '16px', borderRadius: '10px', zIndex: 999 }}>
          <h2>Add Task</h2>
          <label htmlFor="taskName">Task Name:</label>
          <input type="text" id="taskName" value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} />
            <br /><br />
          <label htmlFor="taskDescription">Task Description:</label>
          <textarea id="taskDescription" value={newTaskDescription} onChange={(e) => setNewTaskDescription(e.target.value)} />
            <br /><br />
          <button onClick={handleAddTaskSubmit}>Add Task</button>
          <button onClick={() => setShowAddTaskPopup(false)}>Cancel</button>
        </div>
        )}
    </Box>
  );
};



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




export default Dashboard;