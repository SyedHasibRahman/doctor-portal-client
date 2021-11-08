import { Button, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../../../images/footer-bg.png';

const footerBanner = {
    background: `url(${bg})`,
    padding: '30px',
    backgroundSize: 'auto',
}
const Footer = () => {
    return (
        < >
            <Box style={footerBanner} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ py: 5 }}>
                    <Grid item xs={6} md={3}>
                        <Typography variant="h4" component="div" sx={{ py: 3 }} gutterBottom>
                        </Typography>
                        <Typography variant="p" component="div" sx={{ p: 1 }} gutterBottom>
                            Emergency Dental Care
                        </Typography>
                        <Typography variant="p" component="div" sx={{ p: 1 }} gutterBottom>
                            Check Up
                        </Typography>
                        <Typography variant="p" component="div" sx={{ p: 1 }} gutterBottom>
                            Emergency Dental Care
                        </Typography>
                        <Typography variant="p" component="div" sx={{ p: 1 }} gutterBottom>
                            Emergency Dental Care
                        </Typography>
                    </Grid>
                    <Grid className="Footer-link" item xs={6} md={3}>
                        <Typography variant="h4" component="div" sx={{ py: 3, color: '#43FFDA' }} gutterBottom>
                            Services
                        </Typography>
                        <Typography variant="p" component="div" sx={{ p: 1 }} gutterBottom>
                            Emergency Dental Care
                        </Typography>
                        <Typography variant="p" component="div" sx={{ p: 1 }} gutterBottom>
                            Check Up
                        </Typography>
                        <Typography variant="p" component="div" sx={{ p: 1 }} gutterBottom>
                            Emergency Dental Care
                        </Typography>
                        <Typography variant="p" component="div" sx={{ p: 1 }} gutterBottom>
                            Emergency Dental Care
                        </Typography>

                    </Grid>
                    <Grid className="Footer-link" item xs={6} md={3}>
                        <Typography variant="h4" component="div" sx={{ py: 3, color: '#43FFDA' }} gutterBottom>
                            Oral Health
                        </Typography>
                        <Typography variant="p" component="div" sx={{ p: 1 }} gutterBottom>
                            Emergency Dental Care
                        </Typography>
                        <Typography variant="p" component="div" sx={{ p: 1 }} gutterBottom>
                            Check Up
                        </Typography>
                        <Typography variant="p" component="div" sx={{ p: 1 }} gutterBottom>
                            Emergency Dental Care
                        </Typography>
                        <Typography variant="p" component="div" sx={{ p: 1 }} gutterBottom>
                            Emergency Dental Care
                        </Typography>

                    </Grid>
                    <Grid className="Footer-link" item xs={6} md={3}>
                        <Typography variant="h4" component="div" sx={{ py: 3, color: '#43FFDA' }} gutterBottom>
                            Our Address
                        </Typography>
                        <Typography variant="p" component="div" sx={{ p: 1 }} gutterBottom>
                            New York - 101010 Hudson <br /> Yards
                        </Typography>
                        <Typography variant="p" component="div" sx={{ p: 1 }} gutterBottom>
                            Check Up
                        </Typography>
                        {/* <span>{Coffee}</span> */}
                        <Typography variant="p" component="div" sx={{ p: 1 }} gutterBottom>
                            Call Now
                        </Typography>
                        <Button variant="contained">Contained</Button>

                    </Grid>

                </Grid>
                <Typography variant="p" component="div" sx={{ p: 1 }} gutterBottom>
                    Copyright 2021 All Rights Reserved
                </Typography>
            </Box>
        </ >
    );
};

export default Footer;