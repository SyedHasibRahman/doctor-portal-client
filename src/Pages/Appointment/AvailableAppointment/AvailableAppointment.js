import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        price: 20,
    },
    {
        id: 2,
        name: 'Pendiatric Dental',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        price: 25,
    },
    {
        id: 3,
        name: 'Cosmetic Dentistray',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        price: 30,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        price: 35,
    },
    {
        id: 5,
        name: 'Teeth Replacment',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        price: 40,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        price: 45,
    }
]


const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography sx={ { color: 'success.main', fontWeight: 300, py: 5 } } variant="h4" gutterBottom component="div">
                AvailableAppointment on: { date.toDateString() }
            </Typography>
            {
                bookingSuccess && <Alert severity="success">
                    Appointment <strong>Successfully!</strong>
                </Alert>
            }
            <Grid container spacing={ 2 }>
                {
                    bookings.map(booking => <Booking
                        key={ booking.id }
                        booking={ booking }
                        date={ date }
                        setBookingSuccess={ setBookingSuccess }
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;