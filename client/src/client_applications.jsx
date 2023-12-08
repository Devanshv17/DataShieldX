import { ExpandMore, Search as SearchIcon } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Container, Dialog, IconButton, TextField, Grid } from "@mui/material";
import { useState } from "react";
import StoreAppCard from "@/StoreAppCard";

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
export default function App() {
    const apps = [
        {
            name: "app 1",
            desc: "desc 1",
            id: 0,
            teams: [1, 5, 7, 9]
        },
        {
            name: "app 2",
            desc: "desc 2",
            id: 1,
            teams: [1, 2, 3, 4]
        }
    ];
    const requests = [
        { teamid: 1, appid: 1 }
    ];
    const [appDisplay, setAppDisplay] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [filteredCards, setFilteredCards] = useState(cardData);
    const handleSearchChange = (event) => {
        setSearchValue(event.currentTarget.value);
    };
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Filter cards based on the search value
        const filtered = cardData.filter((card) => card.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredCards(filtered);
    };
    return (<Box sx={{
            width: "100%",
            p: 1
        }}>
		<Accordion sx={{ width: "80%" }}>
			<AccordionSummary expandIcon={<ExpandMore />}>View App/Extension requests</AccordionSummary>
			<AccordionDetails>
				{requests.map(el => (<Card>
					<p>Team id {el.teamid} has requested use of {apps.filter(appel => (appel.id === el.appid))[0].name}</p>
					<Button>Approve</Button><Button>Deny</Button>

				</Card>))}
			</AccordionDetails>

		</Accordion>
		<Box sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            p: 1,
            pt: 2
        }}>
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
                    <TextField label="Search..." value={searchValue} onChange={handleSearchChange} sx={{ ml: 1, width: '200px' }}/>
                  </div>
                </form>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {filteredCards.map((card, index) => (<Grid item key={index} xs={12} sm={6} md={4}>
                    <StoreAppCard linkTo={"/client/app?id=" + card.name} name={card.name} description={card.description} image={card.image}/>
                  </Grid>))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
			<Dialog open={(appDisplay !== null)} onClose={() => { setAppDisplay(null); }} fullWidth={true} maxWidth="lg">
				{appDisplay !== null && <Card>
					<h1>{appDisplay.name}</h1>
				</Card>}
			</Dialog>
		</Box>
		</Box>);
}
