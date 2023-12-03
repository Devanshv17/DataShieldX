// AppGrid.js
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AppCard from './components/HomeAppCard';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {Box, Button, Card, Paper, Tab, Tabs} from "@mui/material";
import StoreAppCard from './components/StoreAppCard';

const cardData = [
  {
    name: 'Card 1',
    description: 'Content for Card 1',
    image: '../photos/IMG_2043.jpg',
  },
  {
    name: 'Card 2',
    description: 'Content for Card 2',
    image: '../photos/IMG_2044.jpg',
  },
  {
    name: 'Card 1',
    description: 'Content for Card 1',
    image: '../photos/IMG_2043.jpg',
  },
  {
    name: 'Card 2',
    description: 'Content for Card 2',
    image: '../photos/IMG_2044.jpg',
  },
  {
    name: 'Card 1',
    description: 'Content for Card 1',
    image: '../photos/IMG_2043.jpg',
  },
  {
    name: 'Card 2',
    description: 'Content for Card 2',
    image: '../photos/IMG_2044.jpg',
  },
  {
    name: 'Card 1',
    description: 'Content for Card 1',
    image: '../photos/IMG_2043.jpg',
  },
  {
    name: 'Card 2',
    description: 'Content for Card 2',
    image: '../photos/IMG_2044.jpg',
  },
  {
    name: 'Card 1',
    description: 'Content for Card 1',
    image: '../photos/IMG_2043.jpg',
  },
  {
    name: 'Card 2',
    description: 'Content for Card 2',
    image: '../photos/IMG_2044.jpg',
  },
  {
    name: 'Card 1',
    description: 'Content for Card 1',
    image: '../photos/IMG_2043.jpg',
  },
  {
    name: 'Card 2',
    description: 'Content for Card 2',
    image: '../photos/IMG_2044.jpg',
  },
  // ... (other card data)
];

const AppGrid = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredCards, setFilteredCards] = useState(cardData);
  const [curr, setCurr] = useState("Home");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Filter cards based on the search value
    const filtered = cardData.filter((card) =>
      card.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  return (
    <>
      <div style={{
      backgroundColor:"#f6f6f6",
      width:"100%",
      height:"100%"
    }}>
      <Paper elevation={1} style={{
        display:"flex",
        alignItems:"center",
        gap:"20px",
        paddingLeft:"10px",
        width:"100%",
        height:"50px",
        marginTop:"0",
      }}>
        <span style={{height:"30px", backgroundColor:"#ddd"}}>Company Name</span>
        <Tabs value={curr} onChange={(_, n) => {setCurr(n)}}>
          <Tab label={"Home"} value={"Home"}/>
          <Tab label={"Chat"} value={"Chat"}/>
          <Tab label={"Apps"} value={"Apps"}/>
        </Tabs>
      </Paper>
      {curr == "Home" ?
      <Box sx={{mt:5, padding: 1}}>
        <h1>My Apps</h1>
        {
          <Container maxWidth="xl">
        <Box border="1px solid #ddd" borderRadius="4px" p={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box mb={2} display="flex" justifyContent="flex-start">
                <form onSubmit={handleSearchSubmit} style={{ display: 'flex' }}>
                  <div style={{ position: 'relative' }}>
                    <IconButton type="submit" sx={{ p: '10px' }}>
                      <SearchIcon />
                    </IconButton>
                    <TextField
                      label="Search..."
                      value={searchValue}
                      onChange={handleSearchChange}
                      sx={{ ml: 1, width: '200px' }}
                    />
                  </div>
                </form>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {filteredCards.map((card, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <AppCard
                      name={card.name}
                      description={card.description}
                      image={card.image}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
        }
      </Box>
      :
      ""}
      {curr == "Chat" ?
      <></>
      :
      ""}
      {curr == "Apps" ?
      <>
        {
          <Container maxWidth="xl">
        <Box border="1px solid #ddd" borderRadius="4px" p={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box mb={2} display="flex" justifyContent="flex-start">
                <form onSubmit={handleSearchSubmit} style={{ display: 'flex' }}>
                  <div style={{ position: 'relative' }}>
                    <IconButton type="submit" sx={{ p: '10px' }}>
                      <SearchIcon />
                    </IconButton>
                    <TextField
                      label="Search..."
                      value={searchValue}
                      onChange={handleSearchChange}
                      sx={{ ml: 1, width: '200px' }}
                    />
                  </div>
                </form>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {filteredCards.map((card, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <StoreAppCard
                      name={card.name}
                      description={card.description}
                      image={card.image}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
        }
      </>
      :
      ""}
    </div>
    </>
  );
};

export default AppGrid;