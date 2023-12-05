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
    name: 'VS Code',
    description: 'Code editor',
    image: 'https://imgs.search.brave.com/i_x3Xj7berzbEMNffR4YncVE-AcMw4MHEn6bVCps96c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/dnMtY29kZS5zdmc.svg',
  },
  {
    name: 'Figma',
    description: 'Designing app',
    image: 'https://imgs.search.brave.com/FdIGGfc3R9dZX9ggCvuTLVjuAb0LfOkNMSxiNmq0NrE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/ZmlnbWEuc3Zn.svg',
  },
];

const AppGrid = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredCards, setFilteredCards] = useState(cardData);
  const [curr, setCurr] = useState("Home");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };
  

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
                      id={index}
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
                      linkTo={`/student/app/${card.name}`}
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
