import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import Fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quaerat eaque, distinctio repellat vel et ipsa reprehenderit totam quae ut ducimus provident iure sed maiores quos explicabo recusandae magni maxime.',
        img: Fluoride,
    },
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quaerat eaque, distinctio repellat vel et ipsa reprehenderit totam quae ut ducimus provident iure sed maiores quos explicabo recusandae magni maxime.',
        img: cavity,
    },
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quaerat eaque, distinctio repellat vel et ipsa reprehenderit totam quae ut ducimus provident iure sed maiores quos explicabo recusandae magni maxime.',
        img: whitening,
    },
]


const Services = () => {
    return (
        <div>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography sx={{ fontWeight: 500, color: 'success.main', m: 5 }} gutterBottom variant="h5" component="div" color="GrayText.secondary">
                        Our Services
                    </Typography>
                    <Typography sx={{ fontWeight: 600, m: 5 }} gutterBottom variant="h3" component="div" color="GrayText.secondary">
                        Services We Provide
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {services.map((service, index) => (
                            <Grid item xs={4} sm={4} md={4} key={index}>

                                <Service
                                    key={service.name}
                                    service={service}
                                >
                                </Service>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Services;