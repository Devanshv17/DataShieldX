import React from "react";
import { Card, Button, Container, Box, Grid, Link } from "@mui/material";

const ActiveProjects = ({ projects }) => (
  <Container maxWidth="xl">
    <Box
      border="1px solid #ddd"
      boxShadow={"0px 0px 5px 0px #D1D1D1"}
      borderRadius="10px"
      p={2}
      sx={{
        backgroundColor: "#FBF8F8",
        maxWidth: "85%", // Set maximum width to 80% of the screen
        margin: "auto", // Center the container horizontally
        padding: 10, // Add padding around the container
        overflow: "auto",
        maxHeight: '80vh',
        paddingTop: 0,
        paddingBottom: 10,
      }}
    >
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
                margin: 2,
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
    </Box>
  </Container>
);

export default ActiveProjects;
