// Apps.tsx
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import AppCard from './HomeAppCard';
import PendingAppCard from '@/PendingAppCard'; // Import PendingAppCard
import StoreAppCard from '@/StoreAppCard';


const apps = ['App 1', 'App 2', 'App 3'];
const projects = [
      { name: 'Project A'},
      { name: 'Project B'},
      { name: 'Project C'},
    ];

const installedAppsData = [
    {
        name: 'VS Code',
        description: 'Code editor',
        image: 'https://imgs.search.brave.com/i_x3Xj7berzbEMNffR4YncVE-AcMw4MHEn6bVCps96c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/dnMtY29kZS5zdmc.svg',
    },
];
const pendingAppsData = [
  {
    name: 'Figma',
    description: 'Designing app',
    image: 'https://imgs.search.brave.com/FdIGGfc3R9dZX9ggCvuTLVjuAb0LfOkNMSxiNmq0NrE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/ZmlnbWEuc3Zn.svg',
  },
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

    const getActiveSectionComponent = (section = curr) => {
        switch (section) {
            case 'Installed':
                return AppCard; // Use StoreAppCard for 'Installed' tab
            case 'Pending':
                return PendingAppCard; // Use PendingAppCard for 'Pending' tab
            case 'Global':
                return StoreAppCard; // Use HomeAppCard for 'Global' tab
            default:
                return null; // Return null or a default component for unknown tabs
        }
    };

    const ActiveCardComponent = getActiveSectionComponent();

    return (
        <div style={{
            backgroundColor: "#f6f6f6",
            minHeight: '100vh'
        }}>
            <Container maxWidth="xl">
                <Box border="1px solid #ddd" boxShadow={"0px 0px 5px 0px #D1D1D1"} borderRadius="10px" p={2} sx={{ backgroundColor: "#FBF8F8" }}>
                <div style={{ height: '50px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    {/* Section Tabs */}
    <div style={{ display: 'flex' }}>
        <Button variant={curr === 'Installed' ? 'contained' : 'outlined'} onClick={() => handleTabChange({}, 'Installed')} style={{ marginRight: '8px', width: '150px', borderRadius: '40px' }}>
            Installed
        </Button>
        <Button variant={curr === 'Pending' ? 'contained' : 'outlined'} onClick={() => handleTabChange({}, 'Pending')} style={{ marginRight: '8px', width: '150px', borderRadius: '40px' }}>
            Pending
        </Button>
        <Button variant={curr === 'Global' ? 'contained' : 'outlined'} onClick={() => handleTabChange({}, 'Global')} style={{ width: '150px', borderRadius: '40px' }}>
            Global
        </Button>
    </div>

    <Box display="flex" alignItems="center">
        <form onSubmit={handleSearchSubmit} style={{ display: 'flex', marginRight: '8px' }}>
            <div style={{ position: 'relative' }}>
                <IconButton type="submit" sx={{ p: '10px' }}>
                    <SearchIcon />
                </IconButton>
                <TextField label="Search..." value={searchValue} onChange={handleSearchChange} sx={{ ml: 1, width: '200px', borderRadius: '20px' }} />
            </div>
        </form>
        <Button style={{ width: '150px', height: '60px',borderRadius: '40px', backgroundColor: '#1977d2', color: '#fff' }}>
            Magic Search
        </Button>
    </Box>
</div>
        <br/>                    
                        
                        <Grid item xs={12}>
                        
                            <Grid container spacing={2}>
                                {filteredCards.map((card, index) => (
                                    <Grid item key={index} xs={12} sm={6} md={4}>
                                        {/* Use the dynamically determined card component with explicit props */}
                                        {ActiveCardComponent === AppCard && (
                                            <AppCard linkTo={`/student/app?id=${card.name}`} name={card.name} description={card.description} image={card.image} />
                                        )}
                                        {ActiveCardComponent === PendingAppCard && (
                                            <PendingAppCard linkTo={`/student/app?id=${card.name}`} name={card.name} description={card.description} image={card.image} />
                                        )}
                                        {ActiveCardComponent === StoreAppCard && (
                                            <StoreAppCard linkTo={`/student/app?id=${card.name}`} name={card.name} description={card.description} image={card.image} />
                                        )}

                                        
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                   
                </Box>
            </Container>
        </div>
    );
};
export default AppGrid;
