// AppCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

interface AppCardProps {
  id: number
  name?: string;
  description?: string;
  buttonText?: string;
  image?: string; // New image prop
}

const AppCard: React.FC<AppCardProps> = ({id, name = 'Lizard', description, image }) => {
  const port = 8080+id;
  const reqUrl = `http://localhost:8081`;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="Card image" height="140" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description ||
            'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
        </Typography>
      </CardContent>
      <CardActions>
      <a href={reqUrl}>
        <Button>Launch</Button>
      </a>
        <Link to={`/student/app/${name}`}><Button variant="contained">Learn more</Button></Link>
      </CardActions>
    </Card>
  );
};

export default AppCard;
