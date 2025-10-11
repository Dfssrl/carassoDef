"use client"
import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
const Login = () => {
   const [state, setState] = React.useState<Record<string, string>>({email: '', password: ''})
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const name = e.target.id
        setState(prev => ({
            ...prev, 
            [name] : value
         }))
    }
    function loginUser() {
        localStorage.getItem('loginUser');
        localStorage.setItem('loginUser', JSON.stringify(state));
    }
    return (
        <div>
            <Dialog open={true} maxWidth="xs" fullWidth>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <form method='POST' action="/accessUser" onSubmit={loginUser}>
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
                    </form>
                </DialogContent>
                <DialogActions>
                <Button onClick={() => alert('Login submit!')}>Accedi</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
} 

export default Login


