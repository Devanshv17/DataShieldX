// HomeTask.jsx
import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import GanttChart from '@/GanttChart';
import ToggleSwitch from '@/Toggle_button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'




const Dashboard = () => {
  const [currTab, setCurrTab] = useState('Timeline');
  const [isTasksExpanded, setIsTasksExpanded] = useState(false);
  const [isBacklogExpanded, setIsBacklogExpanded] = useState(false);
  const [expandedCards, setExpandedCards] = useState([]);
  

  const handleChange = (event, newValue) => {
    setCurrTab(newValue);
  };

  const handleToggleTasks = () => {
    setIsTasksExpanded(!isTasksExpanded);
  };

  const handleToggleBacklog = () => {
    setIsBacklogExpanded(!isBacklogExpanded);
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
    <div style={{ backgroundColor: '#f6f6f6', width: '100%', minHeight: '100vh', padding: '16px', overflowY: 'auto' }}>
      <div style={{ height: '100px', width: '100%' }}>
        <Button
          variant={currTab === 'Timeline' ? 'contained' : 'outlined'}
          onClick={(e) => handleChange(e, 'Timeline')}
          style={{ marginRight: '8px', width: '150px', borderRadius: '40px' }}
        >
          Timeline
        </Button>
        <Button
          variant={currTab === 'Milestone' ? 'contained' : 'outlined'}
          onClick={(e) => handleChange(e, 'Milestone')}
          style={{ width: '150px', borderRadius: '40px' }}
        >
          Milestone
        </Button>
      </div>
      <div style={{ display: 'flex' }}>
        {currTab === 'Timeline' && (
          <>
            <div style={{ flex: '0 0 63%', maxWidth: '63%', marginRight: '16px', overflowY: 'auto' }}>
              <div style={{ borderRadius: '10px', backgroundColor: '#FFFFFF', width: '100%', boxShadow: "0px 0px 5px 0px #D1D1D1" }}>
                <GanttChart style={{ width: '100%' }} />
              </div>
            </div>

            <div style={{ flex: '0 0 32%', maxWidth: '32%', marginRight: '32px', marginLeft: 'auto', backgroundColor: "#FBF8F8", boxShadow: "0px 0px 5px 0px #D1D1D1", padding: '16px', borderRadius: '10px', overflowY: 'auto' }}>
                {/* Card 1 */}
                <Box border="1px solid #ddd" borderRadius="10px" p={2} sx={{ backgroundColor: "#FFFFFF", maxWidth: '100%', boxShadow: "0px 0px 5px 0px #D1D1D1" }}>
                  <h2>Next Milestone Deadline</h2>
                  <p style={{ fontSize: '20px', }}>Name: <span style={{ fontSize: '14px' }}>Project 1</span></p>
                  <p style={{ fontSize: '20px' }}>Deadline: <span style={{ fontSize: '14px' }}>2021-10-20</span></p>
                  <p style={{ fontSize: '20px' }}>Time: <span style={{ fontSize: '14px' }}>2d 3h 5m</span></p>
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
                  onClick={handleToggleBacklog}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2>Backlog Tasks</h2>
                    <span style={{ transform: isBacklogExpanded ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>▶</span>
                  </div>
                  {isBacklogExpanded && (
                    <div style={{ marginTop: '8px' }}>
                      {/* Backlog Task Cards */}
                      <div style={{ backgroundColor: "#FFFFFF", boxShadow: "0px 0px 5px 0px #D1D1D1", padding: '16px', borderRadius: '10px' }}>
                        <h2>Task 4</h2>
                        {/* Add content for Task 4 as needed */}
                      </div>
                      <div style={{ backgroundColor: "#FFFFFF", boxShadow: "0px 0px 5px 0px #D1D1D1", padding: '16px', borderRadius: '10px', marginTop: '16px' }}>
                        <h2>Task 5</h2>
                        {/* Add content for Task 5 as needed */}
                      </div>
                      <div style={{ backgroundColor: "#FFFFFF", boxShadow: "0px 0px 5px 0px #D1D1D1", padding: '16px', borderRadius: '10px', marginTop: '16px' }}>
                        <h2>Task 6</h2>
                        {/* Add content for Task 6 as needed */}
                      </div>
                    </div>
                  )}
                </Box>
              </div>
            </>
          )}
         {/* End of Timeline Tab */}

         

         {currTab === 'Milestone' && (
          <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ flex: '0 0 63%', maxWidth: '63%', marginRight: '16px', overflowY: 'auto' }}>
              {milestoneData.map((milestone, index) => (
                <MLTCard
                  key={`milestoneLeftCard${milestone.id}`}
                  milestone={milestone}
                  isExpanded={expandedCards[index]}
                  onClick={() => handleToggleMLCard(index)}
                />
              ))}
            </div>

            <div style={{ flex: '0 0 32%', maxWidth: '32%', marginRight: '32px', marginLeft: 'auto', backgroundColor: "#FBF8F8", boxShadow: "0px 0px 5px 0px #D1D1D1", padding: '16px', borderRadius: '10px', overflowY: 'auto' }}>
              <Box border="1px solid #ddd" borderRadius="10px" p={2} sx={{ backgroundColor: "#FFFFFF", maxWidth: '100%', boxShadow: "0px 0px 5px 0px #D1D1D1" }}>
                <h2>Next Milestone Deadline</h2>
                <p style={{ fontSize: '20px' }}>Name: <span style={{ fontSize: '14px' }}>Project 1</span></p>
                <p style={{ fontSize: '20px' }}>Deadline: <span style={{ fontSize: '14px' }}>2021-10-20</span></p>
                <p style={{ fontSize: '20px' }}>Time: <span style={{ fontSize: '14px' }}>2d 3h 5m</span></p>
              </Box>
            </div>
          </div>
        )}

        {/* ... */}
      </div>
    </div>
  );
};

// New MLTCard component
const MLTCard = ({ milestone, isExpanded, onClick }) => 

{const profilePictureStyle1 = {
  position: 'absolute',
  left: '0%', // Adjust the positioning as needed
  top: '125%', // Center vertically
  transform: 'translateY(-50%)', // Center vertically
  width: '40px', // Adjust the width as needed for a larger profile picture
  height: '40px', // Adjust the height as needed for a larger profile picture
  
};

// Profile picture style for the second static profile picture
const profilePictureStyle2 = {
  position: 'absolute',
  
  left: '0%', // Adjust the positioning as needed
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
  left: '0%', // Adjust the positioning as needed
  top: '125%', // Center vertically
  transform: 'translateY(-50%)', // Center vertically
  width: '40px', // Adjust the width as needed for a larger profile picture
  height: '40px',
  color: 'blue', // Adjust the height as needed for a larger profile picture
};
return(
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
        <span style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)', fontSize: '24px', transition: 'transform 0.3s ease', marginLeft: '8px' }}>▶</span>
      </div>
    </div>
  </div>
</div>

    
    {isExpanded && (
      <div style={{ marginTop: '8px' }}>
        {/* Iterating over tasks */}
        {milestone.tasks.map((task) => (
          <div key={`task-${task.id}`} style={{ display: 'flex', alignItems: 'center',backgroundColor: "#FFFFFF", boxShadow: "0px 0px 5px 0px #D1D1D1", padding: '16px', borderRadius: '10px', marginTop: '16px' }}>
            <div style={{ flex: 1}}>
              <h2>{task.title}</h2>
              {/* Add content for the task as needed */}
              <p>{task.description}</p>
              <div style={{ position: 'relative' }}>
      {/* Profile picture 1 */}
      <AccountCircleIcon style={profilePictureStyle1} />

      {/* Profile picture 2 (static) */}
      <AccountCircleIcon style={profilePictureStyle2} />

      {/* Profile picture 3 (static) */}
      <AccountCircleIcon style={profilePictureStyle3} />
      </div>
              
            </div>
            <ToggleSwitch />
          </div>
        ))}
      </div>
    )}
  </Box>
)};

export default Dashboard;


