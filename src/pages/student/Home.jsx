// HomeTask.jsx
import React, { useState } from 'react';
import { Tabs, Tab, Container, Box, Button } from '@mui/material';
import GanttChart from '../../GanttChart';

const Dashboard = () => {
  const [currTab, setCurrTab] = useState('Timeline');

  const handleChange = (event, newValue) => {
    setCurrTab(newValue);
  };

  return (
    <div style={{ backgroundColor: '#f6f6f6', width: '100%', minHeight: '100vh'}}>
      <div style={{height:'100px', width:'100%'}}>
        <Box border="1px solid #ddd" borderRadius="10px" p={2} sx={{ backgroundColor: "#FBF8F8" }}>
          <div style={{ marginBottom: '16px'}}>
            <Button
              variant={currTab === 'Timeline' ? 'contained' : 'outlined'}
              onClick={(e) => handleChange(e, 'Timeline')}
              style={{ marginRight: '8px', width: '150px', borderRadius: '40px'}}
            >
              Timeline
            </Button>
            <Button
              variant={currTab === 'Milestone' ? 'contained' : 'outlined'}
              onClick={(e) => handleChange(e, 'Milestone')}
              style={{width: '150px', borderRadius: '40px'}}
            >
              Milestone
            </Button>
          </div>
          <div style={{ padding: '16px' }}>
            {currTab === 'Timeline' && 
            <div style={{borderRadius: '10px', backgroundColor: '#FFFFFF', width: '60%', boxShadow: '0px 0px 5px 0px grey'}}
             ><GanttChart /></div>
            }
            {currTab === 'Milestone' && (
              <div>
                {/* Content for Milestone tab goes here */}
                <h2>Milestone Content</h2>
              </div>
            )}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;


// #0864c4