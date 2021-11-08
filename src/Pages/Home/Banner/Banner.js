import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,
    overflow: 'hidden',
    backgroundSize: 'contain'
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    // border: '1px solid red',
    height: 500
}
const Banner = () => {
    return (
        <div>
            <Container style={bannerBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                        <Box>
                            <Typography variant="h3">
                                Your New Smile <br />
                                Start Here
                            </Typography>
                            <Typography variant="h6" sx={{ my: 3, fontSize: 13, color: 'gray' }}>
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                            </Typography>
                            <Button variant="contained" >Get Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={4} md={6} style={verticalCenter}>
                        <img style={{ width: '70%' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;