import React from "react";
import { Card, Button, Container, Box, Grid, Link } from "@mui/material";

const ActiveProjects = ({ projects }) => (
  <div style={{ display: 'flex', overflowY: 'auto', maxHeight: '90vh' }}>
  <div style={{ flex: '0 0 63%', maxWidth: '63%', marginRight: '16px', marginTop: '16px', backgroundColor: "#FBF8F8", boxShadow: "0px 0px 5px 0px #D1D1D1", padding: '16px', borderRadius: '10px', overflowY: 'auto' }}>
      <h1>Active projects</h1>
      <Grid container spacing={3}>
        {projects.map((el, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4} lg={4}>
            <Card
              sx={{
                width: "100%", // Adjust card width to 100% of the container
                height: "350px",
                borderRadius: "10px",
                boxShadow: "0px 0px 5px 0px #D1D1D1",
                margin: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box textAlign="center">
                <h1>{el.name}</h1>
                <h5 color="grey">{el.text}</h5>
              </Box>
              <Box textAlign="center" pb={2}>
                <Link href={`/client/instance?id=${idx}`} passHref>
                  <Button variant="contained">View details</Button>
                </Link>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
  </div>

<div style={{ flex: '0 0 32%', maxWidth: '32%',maxHeight: '100vh', marginRight: '32px', marginLeft: 'auto', backgroundColor: "#FBF8F8", boxShadow: "0px 0px 5px 0px #D1D1D1", padding: '16px', borderRadius: '10px', overflowY: 'auto' }}>
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
</div>
</div>

);

export default ActiveProjects;
