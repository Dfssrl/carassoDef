"use client"
import React, { useState } from 'react';
import styles from './style.module.css';

import { useRouter } from 'next/navigation';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Box, Paper, Typography, CircularProgress } from '@mui/material';
import Link from 'next/link';
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
            const result = await fetch("/api/accessUser", {
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
            {/* Esempio di uso di `slotProps` per personalizzare i "slot" interni di MUI Dialog.
                Qui personalizziamo il backdrop (colore e comportamento al click) e il paper
                (padding, borderRadius, elevation). In alternative alle property `slotProps`
                si possono usare `PaperProps` e `BackdropProps` nelle versioni precedenti di MUI.
            */}
            {
                loading ? (
                    <CircularProgress size={70} sx={{ m: 5 }} />
                )
                    :
                    (
                        <Dialog
                            open={true}
                            maxWidth="sm"
                            fullWidth
                            scroll="paper"
                            slotProps={{
                                backdrop: {
                                    // cambia l'aspetto dello sfondo oscurante
                                    sx: { backgroundColor: 'rgba(0,0,0,0.6)' },
                                    // esempio: al click sul backdrop resettiamo l'errore
                                    onClick: () => setError(null),
                                },
                                paper: {
                                    // personalizza il Paper che contiene il contenuto del dialog
                                    sx: {
                                        position: "absolute",
                                        top: "20%",
                                        left: "50%",
                                        transform: "translate(-52%, -18%)",
                                        width: 700,
                                        height: 400,
                                        p: 3,
                                        borderRadius: 2
                                    },
                                    elevation: 4,
                                },
                            }}
                        >
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
                                    <Button type='submit' variant="contained" disabled={loading}>
                                        {loading ? 'Loading...' : 'Accedi'}
                                    </Button>
                                </DialogActions>
                            </form>
                            <DialogContent>
                                <Box sx={{
                                    position: "relative",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "2rem",
                                    // border: "1px solid red",
                                }}>
                                    <Typography variant="body2" component={'span'} sx={{
                                        color: "rgb(170, 1, 1)",
                                        fontSize: "0.7rem",
                                    }}>
                                        <Link href={"/forgotPassword"}
                                        onClick={() => {
                                            setLoading(true);
                                        }}>
                                           Hai dimenticato la tua password
                                        </Link>
                                    </Typography>
                                </Box>
                            </DialogContent>
                        </Dialog>
                    )
            }
        </>
    )
}

export default Login


