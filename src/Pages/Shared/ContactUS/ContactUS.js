import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/appointment-bg.png';
import TextField from '@mui/material/TextField';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    padding: '30px',
    backgroundSize: 'auto',
}

const ContactUS = () => {
    return (
        <div>
            <Box style={appointmentBanner} sx={{ flexGrow: 1, py: 5, lineHeight: 5 }}>
                <Typography variant="h5" component="div" sx={{ color: '#43FFDA' }} gutterBottom>
                    CONTACT US
                </Typography>
                <Typography variant="h3" component="div" sx={{ color: 'white' }} gutterBottom>
                    Always Connect with us
                </Typography>
                <form>
                    <TextField
                        label="Email Address"
                        // disabled
                        sx={{ width: '50%', margin: 1, bgcolor: 'white' }}
                        id="filled-size-small"
                        // defaultValue="Small"
                        variant="filled"
                        size="small"
                    />
                    <TextField

                        label="Subject"
                        // disabled
                        sx={{ width: '50%', margin: 1, bgcolor: 'white' }}
                        id="filled-size-small"
                        // defaultValue="Small"
                        variant="filled"
                        size="small"
                    /> <br />
                    <textarea
                        placeholder="Your Message"
                        // disabled 
                        style={{ width: '50%', padding: '50px 1px' }}
                        sx={{ margin: 1 }}
                        id="filled-size-small"
                        // defaultValue="Small"
                        variant="filled"
                        size="small"
                    /><br />
                    <Button variant="contained">Contained</Button>

                </form>
            </Box>

        </div>
    );
};

export default ContactUS;