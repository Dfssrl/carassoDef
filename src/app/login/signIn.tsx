import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

interface SignInProps {
    state: Record<string, string>;
    open: boolean;
    setError: (error: string | null) => void;
    handleLogin: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    toggle?: string;
    setSignIn: (signIn: boolean) => void;
}

const SignIn = ({
    state, handleLogin,
    handleChange, loading, setLoading, toggle, setSignIn
}: SignInProps) => {

    return (
        <>
            <form method='POST' action="/accessUser" onSubmit={handleLogin}>
                <DialogTitle>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        alignItems: 'center',
                    }}>
                        <Box>Sign In</Box>
                        <Box>
                            <Button
                                variant='contained'
                                color='warning'
                                onClick={() => setSignIn(false)}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </Box>
                </DialogTitle>
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
                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'flex-end',
                        backgroundColor: 'transparent',
                        px: 2,
                    }}>
                        <Button type='submit' variant="contained" disabled={loading}>
                            {loading ? 'Loading...' : 'Accedi'}
                        </Button>
                    </Box>
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
        </>
    );
};

export default SignIn;