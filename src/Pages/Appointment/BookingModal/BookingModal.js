import { Fade, Modal } from '@mui/material';
import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
    const { name, time, price } = booking;
    const { user } = useAuth()

    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo }
        newInfo[field] = value;
        // console.log(newInfo);
        setBookingInfo(newInfo);
    }

    const handleConfirmBooking = e => {
        e.preventDefault()

        // Collect Data and 
        const appointment = {
            ...bookingInfo,
            time,
            price,
            serviceName: name,
            date: date.toLocaleDateString(),
        }


        //send it to database...
        fetch('https://salty-scrubland-74088.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            });
        // console.log(appointment);
        // alert("handleConfirmBooking");
        // handleBookingClose();
    }

    return (
        <div>
            {/* <Button onClick={handleBookingOpen}>Open modal</Button> */ }
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={ openBooking }
                onClose={ handleBookingClose }
                closeAfterTransition
                BackdropComponent={ Backdrop }
                BackdropProps={ {
                    timeout: 500,
                } }
            >
                <Fade in={ openBooking }>
                    <Box sx={ style }>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            { name }
                        </Typography>
                        <form onSubmit={ handleConfirmBooking }>
                            <TextField
                                // label="Size"
                                disabled
                                sx={ { width: '95%', margin: 1 } }
                                id="filled-size-small"
                                defaultValue={ time }
                                // defaultValue="Small"
                                variant="filled"
                                size="small"
                            />
                            <TextField
                                sx={ { width: '95%', margin: 1 } }
                                id="filled-size-small"
                                name="patientName"
                                onBlur={ handleOnBlur }
                                defaultValue={ user.displayName }
                                variant="filled"
                                size="small"
                            />
                            <TextField
                                sx={ { width: '95%', margin: 1 } }
                                id="filled-size-small"
                                name="email"
                                defaultValue={ user.email }
                                onBlur={ handleOnBlur }
                                variant="filled"
                                size="small"
                            />
                            <TextField
                                sx={ { width: '95%', margin: 1 } }
                                id="filled-size-small"
                                name="phone"
                                placeholder="Phone Number"
                                onBlur={ handleOnBlur }
                                variant="filled"
                                size="small"
                            />
                            <TextField
                                disabled
                                sx={ { width: '95%', margin: 1 } }
                                id="filled-size-small"
                                defaultValue={ date.toDateString() }
                                onBlur={ handleOnBlur }
                                variant="filled"
                                size="small"
                            />
                            <Button type="submit" variant="contained">Confirm Booking</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default BookingModal;