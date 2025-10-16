import { DialogTitle, DialogContent, TextField, DialogActions, Button, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

interface SignInProps {
    state: Record<string, string>;
    open: boolean;
    setError: (error: string | null) => void;
    handleLogin: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    loading: boolean;
    toggle?: string;
    setSignIn: (signIn: boolean) => void;
    setLoading?: (loading: boolean) => void;
}

const SignUp = ({
    state, handleLogin,
    handleChange, loading, toggle, setSignIn
}: SignInProps) => {

    return (

        <form method='POST' action="/accessUser" onSubmit={handleLogin}>
            <DialogTitle>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center',
                }}>
                    <Box>Sign Up</Box>
                    <Box>
                        <Button
                            variant='contained'
                            color='warning'
                            onClick={() => setSignIn(true)}
                        >
                            Sign In
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
                <TextField
                    autoFocus
                    margin='dense'
                    id='ruolo'
                    label='ruolo'
                    type='number'
                    fullWidth
                    variant='outlined'
                    value={state.ruolo}
                    onChange={handleChange}
                    slotProps={{
                        input: {
                            inputProps: {
                                min: 0,
                                max: 6,
                                step: 1,
                            }
                        }
                    }}
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
                        {loading ? 'Loading...' : 'Registrati'}
                    </Button>
                </Box>
            </DialogActions>
        </form>
    );
};

export default SignUp;