

// Apps.tsx
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import AppCard from './HomeAppCard';
import PendingAppCard from '@/PendingAppCard'; 
import RequestsAppCard from '@/RequestsAppCard';
import StoreAppCard from '@/StoreAppCard';
const installedAppsData = [
    {
        name: 'VS Code',
        description: 'Code editor',
        image: 'https://imgs.search.brave.com/i_x3Xj7berzbEMNffR4YncVE-AcMw4MHEn6bVCps96c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/dnMtY29kZS5zdmc.svg',
    },
];
    
    const apps = ['App 1', 'App 2', 'App 3'];
    const projects = [
      { name: 'Project A'},
      { name: 'Project B'},
      { name: 'Project C'},
    ];

const RequestsAppsData = [
    {
        name: 'VS Code',
        description: 'Code editor',
        image: 'https://imgs.search.brave.com/i_x3Xj7berzbEMNffR4YncVE-AcMw4MHEn6bVCps96c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/dnMtY29kZS5zdmc.svg',
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
    const [isMilestonesExpanded, setIsMilestonesExpanded] = useState(false);

    const [milestonesExpanded, setMilestonesExpanded] = useState({});

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

    
    const handleMilestones = (projectName) => {
        setMilestonesExpanded((prev) => ({
          ...prev,
          [projectName]: !prev[projectName],
        }));
      };
      

    const getActiveSectionData = (section = curr) => {
        switch (section) {
            case 'Installed':
                return installedAppsData;
            case 'Pending':
                return projects;
            case 'Requests':
                return RequestsAppsData;
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
                return PendingAppCard; 
            case 'Requests':
                return RequestsAppCard;// Use PendingAppCard for 'Pending' tab
            case 'Global':
                return StoreAppCard; // Use HomeAppCard for 'Global' tab
            default:
                return null; // Return null or a default component for unknown tabs
        }
    };

    const ProjectList = ({ projects }) => (
        <div>
          {projects.map((project, index) => (
            <Project
              key={index}
              {...project}
              isExpanded={milestonesExpanded[project.name]}
              onToggleMilestones={() => handleMilestones(project.name)}
              
            />
            
          ))}
          
        </div>
      );
      
      
      const Project = ({ name, words, isExpanded, onToggleMilestones }) => {
        const [hoveredIndex, setHoveredIndex] = React.useState(null);
      
        const handleDeleteWord = (index) => {
          const updatedWords = [...words];
          updatedWords.splice(index, 1);
          // Assuming you have a function to update the state of words in your application
          // For example: updateWords(updatedWords);
        };
      
        return (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              boxShadow: '0px 0px 5px 0px #D1D1D1',
              marginTop: '20px',
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={onToggleMilestones}
          >
            <div>
              <h2>{name}</h2>
              {isExpanded && (
                <div>
                  <p>APPS:</p>
                  <div>
                  {words.map((word, index) => (
  <span key={index} style={{ marginRight: '5px' }}>
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        style={{
          height: '40px',
          paddingLeft: '20px',
          paddingRight: '40px', // Increased paddingRight to accommodate the "x" button
          margin: '10px',
          borderRadius: '40px',
          backgroundColor: index === hoveredIndex ? '#1977d2' : '#FFFFFF',
          color: index === hoveredIndex ? '#FFFFFF' : '#1977d2',
          border: `2px solid ${index === hoveredIndex ? '#FFFFFF' : '#1977d2'}`,
          transition: 'background-color 0.3s ease, color 0.3s ease, border 0.3s ease',
        }}
      >
        {word}
      </button>
      <button
        onClick={() => handleDeleteWord(index)}
        style={{
          position: 'absolute',
          top: '50%',
          right: '15%', // Adjust as needed for positioning
          transform: 'translateY(-60%)',
          backgroundColor: '#FFFFFF',
          color: '#DDD',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          display: 'block',
          fontSize: '20px'
        }}
      >
        x
      </button>
    </div>
  </span>
))}

                  </div>
                </div>
              )}
            </div>
            <span style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>▶</span>
          </div>
        );
      };
      
      
      const projectsData = [
        {
          name: 'Project 1',
          words: ['Word1', 'Word2', 'Word3', 'Word4', 'Word5', 'Word6', 'Word7', 'Word8', 'Word9', 'Word10'],
        },
        {
          name: 'Project 2',
          words: ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Pear', 'Pineapple', 'Watermelon', 'Kiwi', 'Strawberry'],
        },
        // Add more projects as needed
      ];
      
      

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
            Permissions
        </Button>
        <Button variant={curr === 'Requests' ? 'contained' : 'outlined'} onClick={() => handleTabChange({}, 'Requests')} style={{ marginRight: '8px', width: '150px', borderRadius: '40px' }}>
            Requests
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
                            
                        
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                {filteredCards.map((card, index) => (
                                    <Grid item key={index} xs={12} sm={6} md={4}>
                                        {/* Use the dynamically determined card component with explicit props */}
                                        {ActiveCardComponent === AppCard && (
                                            <AppCard linkTo={`/client/app?id=${card.name}`} name={card.name} description={card.description} image={card.image} />
                                        )}
                                        
                                        {ActiveCardComponent === RequestsAppCard && (
                                            <RequestsAppCard linkTo={`/client/app?id=${card.name}`} name={card.name} description={card.description} image={card.image} />
                                        )}
                                        {ActiveCardComponent === StoreAppCard && (
                                            <StoreAppCard linkTo={`/client/app?id=${card.name}`} name={card.name} description={card.description} image={card.image} />
                                        )}
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                        {ActiveCardComponent === PendingAppCard && (
                                            <>
 <div>
      <ProjectList projects={projectsData} />
    </div>

                                            </>
                                        )}
                   
                </Box>
            </Container>
        </div>
    );
};
export default AppGrid;




// import { ExpandMore, Search as SearchIcon } from "@mui/icons-material";
// import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Container, Dialog, IconButton, TextField, Grid } from "@mui/material";
// import { useState } from "react";
// import StoreAppCard from "@/StoreAppCard";

// const cardData = [
//     {
//         name: 'VS Code',
//         description: 'Code editor',
//         image: 'https://imgs.search.brave.com/i_x3Xj7berzbEMNffR4YncVE-AcMw4MHEn6bVCps96c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/dnMtY29kZS5zdmc.svg',
//     },
//     {
//         name: 'Figma',
//         description: 'Designing app',
//         image: 'https://imgs.search.brave.com/FdIGGfc3R9dZX9ggCvuTLVjuAb0LfOkNMSxiNmq0NrE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/ZmlnbWEuc3Zn.svg',
//     },
// ];
// export default function App() {
//     const apps = [
//         {
//             name: "app 1",
//             desc: "desc 1",
//             id: 0,
//             teams: [1, 5, 7, 9]
//         },
//         {
//             name: "app 2",
//             desc: "desc 2",
//             id: 1,
//             teams: [1, 2, 3, 4]
//         }
//     ];
//     const requests = [
//         { teamid: 1, appid: 1 }
//     ];
//     const [appDisplay, setAppDisplay] = useState(null);
//     const [searchValue, setSearchValue] = useState('');
//     const [filteredCards, setFilteredCards] = useState(cardData);
//     const handleSearchChange = (event) => {
//         setSearchValue(event.currentTarget.value);
//     };
//     const handleSearchSubmit = (event) => {
//         event.preventDefault();
//         // Filter cards based on the search value
//         const filtered = cardData.filter((card) => card.name.toLowerCase().includes(searchValue.toLowerCase()));
//         setFilteredCards(filtered);
//     };
//     return (<Box sx={{
//             width: "100%",
//             p: 1
//         }}>
// 		<Accordion sx={{ width: "80%" }}>
// 			<AccordionSummary expandIcon={<ExpandMore />}>View App/Extension requests</AccordionSummary>
// 			<AccordionDetails>
// 				{requests.map(el => (<Card>
// 					<p>Team id {el.teamid} has requested use of {apps.filter(appel => (appel.id === el.appid))[0].name}</p>
// 					<Button>Approve</Button><Button>Deny</Button>

// 				</Card>))}
// 			</AccordionDetails>

// 		</Accordion>
// 		<Box sx={{
//             width: "100%",
//             display: "flex",
//             flexWrap: "wrap",
//             gap: "10px",
//             p: 1,
//             pt: 2
//         }}>
// 			<Container maxWidth="xl">
//         <Box border="1px solid #ddd" borderRadius="4px" p={2}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <Box mb={2} display="flex" justifyContent="flex-start">
//                 <form onSubmit={handleSearchSubmit} style={{ display: 'flex' }}>
//                   <div style={{ position: 'relative' }}>
//                     <IconButton type="submit" sx={{ p: '10px' }}>
//                       <SearchIcon />
//                     </IconButton>
//                     <TextField label="Search..." value={searchValue} onChange={handleSearchChange} sx={{ ml: 1, width: '200px' }}/>
//                   </div>
//                 </form>
//               </Box>
//             </Grid>
//             <Grid item xs={12}>
//               <Grid container spacing={2}>
//                 {filteredCards.map((card, index) => (<Grid item key={index} xs={12} sm={6} md={4}>
//                     <StoreAppCard linkTo={"/client/app?id=" + card.name} name={card.name} description={card.description} image={card.image}/>
//                   </Grid>))}
//               </Grid>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
// 			<Dialog open={(appDisplay !== null)} onClose={() => { setAppDisplay(null); }} fullWidth={true} maxWidth="lg">
// 				{appDisplay !== null && <Card>
// 					<h1>{appDisplay.name}</h1>
// 				</Card>}
// 			</Dialog>
// 		</Box>
// 		</Box>);
// }