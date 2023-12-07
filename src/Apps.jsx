// Apps.tsx
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
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
            minHeight: '100vh'
        }}>
      <Container maxWidth="xl">
        <Box border="1px solid #ddd" boxShadow={"0px 0px 5px 0px #D1D1D1"} borderRadius="10px" p={2} sx={{ backgroundColor: "#FBF8F8" }}>
          
           <Grid item xs={12}>
              <Box mb={2} display="flex" justifyContent="center">
                {/* Section Tabs */}
                <Button variant={curr === 'Installed' ? 'contained' : 'outlined'} onClick={() => handleTabChange({}, 'Installed')} sx={{ borderRadius: '16px 0 0 16px', flex: 1 }}>
                  Installed
                </Button>
                <Button variant={curr === 'Pending' ? 'contained' : 'outlined'} onClick={() => handleTabChange({}, 'Pending')} sx={{ flex: 1 }}>
                  Pending
                </Button>
                <Button variant={curr === 'Global' ? 'contained' : 'outlined'} onClick={() => handleTabChange({}, 'Global')} sx={{ borderRadius: '0 16px 16px 0', flex: 1 }}>
                  Global
                </Button>
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
