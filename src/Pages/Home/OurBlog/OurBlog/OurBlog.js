import { Card,  CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const OurBlog = () => {
    return (
        <div>


            <Card sx={{ minWidth: 275 }} className="BlogNews">
                <CardContent>
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
                                19 April 2021
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography sx={{ py: 3 }} variant="h6" component="div" gutterBottom>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default OurBlog;