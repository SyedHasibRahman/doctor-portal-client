import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const CheckoutForm = ({ appointment }) => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const { price, paitentName, _id } = appointment;
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const [process, setProcess] = useState(false)
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch('https://salty-scrubland-74088.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [price])




    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        setProcess(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            // console.log(error);
            setError(error.message);
            setSuccess('')
        }
        else {
            setError('');
            console.log(paymentMethod);
            setProcess(false);
        }

        // Payment Intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: paitentName,
                        email: user.email,
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message);
            setSuccess('')
        }
        else {
            setError('');
            console.log(paymentIntent);
            setSuccess('Your Payment processed successfully.');
            // save to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url = `https://salty-scrubland-74088.herokuapp.com/appointments/${_id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <CardElement
                    options={ {
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    } }
                />
                { process ? <CircularProgress /> : <button type="submit" disabled={ !stripe || success }>
                    Pay ${ price }
                </button> }
            </form>
            {
                error && <p style={ { color: 'red' } }>{ error }</p>
            }
            {
                success && <p style={ { color: 'green' } }>{ success }</p>
            }
        </div>
    );
};

export default CheckoutForm;