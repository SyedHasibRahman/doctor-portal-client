import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth()
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdmitSubmit = e => {
        const user = { email }
        fetch('https://salty-scrubland-74088.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)
                    setSuccess(true);
                }

            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Make Admin</h2>
            {
                success && <Alert severity="success">Made Admin Successfully!</Alert>
            }
            <form onSubmit={handleAdmitSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    variant="standard"
                    onBlur={handleOnBlur}
                />
                <Button type="submit" variant="contained">Make Admin</Button>

            </form>
        </div>
    );
};

export default MakeAdmin;