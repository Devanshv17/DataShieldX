// AppCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
const RequestsAppCard = ({ linkTo, name = 'Lizard', description, image }) => {
    return (<Card sx={{ maxWidth: 345, height: '100%', borderRadius: "10px", boxShadow: "0px 0px 5px 0px #D1D1D1" }}>
      <CardMedia component="img" alt="Card image" height="250" image={image}/>
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
        <Link href={linkTo}><Button variant="contained">Learn more</Button></Link>
      </CardActions>
    </Card>);
};
export default RequestsAppCard;