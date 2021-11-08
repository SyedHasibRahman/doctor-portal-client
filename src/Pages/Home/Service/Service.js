import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const { name, description, img } = props.service;
    // console.log(img);
    return (
        <div>
            <Card sx={{ maxWidth: 345, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    // height="120"
                    style={{ width: 'auto', height: '80px', margin: '0 auto', padding: '20px' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="GrayText.secondary">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    {/* <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button> */}
                </CardActions>
            </Card>
        </div>
    );
};

export default Service;