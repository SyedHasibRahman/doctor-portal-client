import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import bg from '../../../images/treatment.png'

const DentalCare = () => {
    return (
        <div>
            <Container>
                <Box sx={{ my: 7 }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ alignItems: 'center' }}>
                        <Grid item xs={6} md={5} >
                            <img style={{
                                width: '85%',
                            }} src={bg} alt="" />
                        </Grid>
                        <Grid item xs={6} md={7} sx={{ textAlign: 'left' }} >
                            <Typography variant="h3" gutterBottom component="div">
                                Exceptional Dental <br /> Care, on Your Terms
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{ my: 5, lineHeight: 2, color: '#9e9e9e' }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </Typography>
                            <Button variant="contained">Learn More</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default DentalCare;