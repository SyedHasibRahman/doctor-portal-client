import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <Paper variant="outlined" sx={{ px: 3, py: 4 }}>
                <Typography variant="h5" component="div" gutterBottom>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Typography>
                <Grid>
                    <Box sx={{ width: '100%' }}>
                        <Grid container>
                            <Grid item xs={6} md={4}>
                                <img style={{ width: '70%', borderRadius: '50%' }} src="https://lh3.googleusercontent.com/ogw/ADea4I74adizJvXyKsiSt_mzkADtlKF3Sd9ZdZPqlzPK_g=s83-c-mo" alt="" />
                            </Grid>
                            <Grid item xs={6} md={8} >
                                <Typography variant="h5"
                                    sx={{ color: '#00e676' }} component="div" gutterBottom>
                                    Winson Herry
                                </Typography>
                                <Typography variant="p" component="div" gutterBottom>
                                    California
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Paper>
        </div>
    );
};

export default Testimonial;