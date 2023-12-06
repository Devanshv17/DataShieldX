// Apps.tsx
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { Box, Tabs, Tab } from '@mui/material';
import StoreAppCard from '@/StoreAppCard';
const installedAppsData = [
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
const pendingAppsData = [
// Pending Apps data
// Add your pending apps data here
];
const globalAppsData = [
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
    const [filteredCards, setFilteredCards] = useState(installedAppsData); // Default to Installed section
    const [curr, setCurr] = useState("Installed");
    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Filter cards based on the search value
        const filtered = getActiveSectionData().filter((card) => card.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredCards(filtered);
    };
    const handleTabChange = (event, newValue) => {
        setCurr(newValue);
        setFilteredCards(getActiveSectionData(newValue));
    };
    const getActiveSectionData = (section = curr) => {
        switch (section) {
            case 'Installed':
                return installedAppsData;
            case 'Pending':
                return pendingAppsData;
            case 'Global':
                return globalAppsData;
            default:
                return [];
        }
    };
    return (<div style={{
            backgroundColor: "#f6f6f6",
            width: "100%",
            height: "100%"
        }}>
      <Container maxWidth="xl">
        <Box border="1px solid #ddd" borderRadius="4px" p={2}>
          
            <Grid item xs={12}>
              <Box mb={2} display="flex" justifyContent="center">
                {/* Section Tabs */}
                <Tabs value={curr} onChange={handleTabChange}>
                  <Tab label="Installed" value="Installed"/>
                  <Tab label="Pending" value="Pending"/>
                  <Tab label="Global" value="Global"/>
                </Tabs>
              </Box>
            </Grid>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box mb={2} display="flex" justifyContent="flex-start">
                <form onSubmit={handleSearchSubmit} style={{ display: 'flex' }}>
                  <div style={{ position: 'relative' }}>
                    <IconButton type="submit" sx={{ p: '10px' }}>
                      <SearchIcon />
                    </IconButton>
                    <TextField label="Search..." value={searchValue} onChange={handleSearchChange} sx={{ ml: 1, width: '200px' }}/>
                  </div>
                </form>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {filteredCards.map((card, index) => (<Grid item key={index} xs={12} sm={6} md={4}>
                    <StoreAppCard linkTo={`/student/app?id=${card.name}`} name={card.name} description={card.description} image={card.image}/>
                  </Grid>))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>);
};
export default AppGrid;
