import { Container } from '@mui/material';
import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Testimonials = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ textAlign: 'left', my: 5 }}>
                    <Box>
                        <Typography sx={{ color: '#00e676' }} variant="h5" component="div" gutterBottom>
                            Testimonial
                        </Typography>
                        <Typography variant="h3" component="div" gutterBottom>
                            What's Our Patients <br /> Says
                        </Typography>
                    </Box>
                </Grid>
            </Box>

            <Grid container spacing={4} sx={{ textAlign: 'justify' }}>

                {Array.from(Array(3)).map((_, index) => (
                    <Grid item xs={12} md={4} key={index}>

                        <Testimonial />

                    </Grid>

                ))}

            </Grid>

        </Container >
    );
};

export default Testimonials;