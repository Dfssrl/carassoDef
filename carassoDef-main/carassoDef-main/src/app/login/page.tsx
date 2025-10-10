"use client"
import React, { useState } from 'react';
import styles from './style.module.css';

import { useRouter } from 'next/navigation';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Box } from '@mui/material';
const Login = () => {
    const [state, setState] = useState<Record<string, string>>({ email: '', password: '' });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const name = e.target.id
        setState(prev => ({
            ...prev,
            [name]: value
        }))
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (!state.email && !state.password) {
            setError("Please fill in all fields");
            setLoading(false);
            return;
        }

        try {
            const result = await fetch("/accessUser", {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(state),
            })

            const data = await result.json();
            setLoading(false);

            if (!data.success) {
                setError(data.message || "Login failed");
                router.push("/login")
            } else {
                router.push("/dashboard");
            }
        } catch (error) {

        }
    };

    return (
        <>
            <Dialog open={true} maxWidth="sm" fullWidth>
                <form method='POST' action="/accessUser" onSubmit={handleLogin}>
                    <DialogTitle>Login</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email"
                            type="email"
                            fullWidth
                            variant="outlined"
                            value={state.email}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                            variant="outlined"
                            value={state.password}
                            onChange={handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button type='submit' disabled={loading}>
                            {loading ? 'Loading...' : 'Accedi'}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}

export default Login


