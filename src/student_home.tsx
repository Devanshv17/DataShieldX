// AppGrid.js
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppCard from './components/AppCard';
import Navbar from './components/Navbar';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

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
  // ... (other card data)
];

const AppGrid = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredCards, setFilteredCards] = useState(cardData);

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
      <Navbar />
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
    </>
  );
};

export default AppGrid;
