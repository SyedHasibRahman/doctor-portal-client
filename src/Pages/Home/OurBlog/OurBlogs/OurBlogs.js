import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import OurBlog from '../OurBlog/OurBlog';
import './OurBlogs.css'

const OurBlogs = () => {
    return (
        <div>
            <Container fixed>
                <Box sx={{ py: 5 }} >
                    <Typography sx={{ color: '#00e676' }} variant="h4" gutterBottom component="div">
                        Our Blog
                    </Typography>
                    <Typography variant="h2" gutterBottom component="div">
                        From Our Blog News
                    </Typography>
                    <Grid sx={{ py: 3 }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {Array.from(Array(3)).map((_, index) => (
                            <Grid item xs={6} md={4} key={index} >

                                <OurBlog />

                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default OurBlogs;