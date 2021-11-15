import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import { Container } from '@mui/material';


const stripePromise = loadStripe('pk_test_51JvyS7IHLAYanJsYOO8cV7IrZ9fF8gCyRkhISzmsfbd6GdJngOeIz8buTZ0bs6WDjFJcOQQE0UcL9zGxOBX0m0aF00oRGDEJ0O')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`https://salty-scrubland-74088.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));

    }, [appointmentId])
    return (
        <div>
            <h2>Please Pay For : { appointment.patientName }</h2>
            <h2>Amount : ${ appointment.price }</h2>
            <Container
                sx={ { width: '50%' } }
            >
                { appointment?.price && <Elements stripe={ stripePromise }>
                    <CheckoutForm
                        appointment={ appointment }
                    />
                </Elements> }
            </Container>
        </div>
    );
};

export default Payment;