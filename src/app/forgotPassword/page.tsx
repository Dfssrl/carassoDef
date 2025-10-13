"use client";
import WrapperBox from "@/components/WrapperBox/wrapperBox";
import { Box, Button, CircularProgress, Snackbar, Alert, Stack, TextField, Theme, Typography, useTheme } from "@mui/material"
import { blue, grey } from "@mui/material/colors";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ForgotPassword = () => {
    const theme = useTheme<Theme>();
    const router = useRouter();

    const [user, setUser] = useState<Record<string, string>>({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSaveNewPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/reset-password", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            });

            if (!res.ok) {
                console.error(`Errore nella post: ${String(res.status)}`);
                setSnackbarMessage(res.statusText);
                setSnackbarSeverity("error");
                setSnackbarOpen(true);
                setLoading(false);
                router.push('forgotPassword');
                return;
            }

            const data = await res.json();

            if (!data.email.includes("@") || data.password.length < 6) {
                setSnackbarMessage("Email non valida o password troppo corta");
                setSnackbarSeverity("error");
                setSnackbarOpen(true);
                return;
            }

            setSnackbarMessage("Password aggiornata con successo!");
            setSnackbarSeverity("success");
            setSnackbarOpen(true);
            router.push("/dashboard");
        } catch (error) {
            console.error("Not data and error: ", error);
            setLoading(false);
        }
    };

    return (
        <>
            <WrapperBox>
                {loading ? (
                    <CircularProgress size={60} sx={{ m: 6 }} />
                ) : (
                    <Box sx={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "100%",
                        minWidth: "100%",
                        margin: 0,
                        padding: 2,
                        backgroundColor: grey[900],
                    }}>
                        <Stack spacing={2}
                            sx={{
                                height: "25rem",
                                width: "30rem",
                                border: "2px solid black",
                                backgroundColor: "white",
                                alignItems: "center",
                                borderRadius: 8,
                                p: 2,
                                gap: "0 3rem",
                            }}>
                            <Box sx={{
                                position: "relative",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "30%",
                                minHeight: "6rem",
                                width: "90%",
                                minWidth: "200px",
                                // border: "3px solid black",
                                backgroundColor: grey[500],
                                borderRadius: 8,
                            }}>
                                <Typography variant="h4" fontFamily={"cursive"}>
                                    Change your password
                                </Typography>
                            </Box>
                            <Box sx={{
                                position: "relative",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                height: "70%",
                                minHeight: "6rem",
                                width: "90%",
                                minWidth: "200px",
                                // border: "3px solid acqua",
                                borderRadius: 8,
                            }}>
                                <Box
                                    component="form"
                                    onSubmit={handleSaveNewPassword}
                                    sx={{
                                        position: "relative",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 2,
                                        justifyContent: "center",
                                        height: "100%",
                                        width: "100%",
                                        backgroundColor: grey[500],
                                        borderRadius: 8,
                                        p: 2,
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        required
                                        aria-required="true"
                                        id="email"
                                        name="email"
                                        type="email"
                                        aria-label="email"
                                        placeholder="example@email.it"
                                        value={user.email}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                        sx={{
                                            backgroundColor: "white",
                                            borderRadius: 8,
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                border: "none",
                                            },
                                        }}
                                    />
                                    <TextField
                                        fullWidth
                                        required
                                        aria-required="true"
                                        id="password"
                                        name="password"
                                        type="password"
                                        aria-label="password"
                                        placeholder="password"
                                        value={user.password}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                        sx={{
                                            backgroundColor: "white",
                                            borderRadius: 8,
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                border: "none",
                                            },
                                        }}
                                    />
                                    <Box sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "flex-end",
                                        height: "3rem",
                                        width: "100%",
                                        backgroundColor: "transparent",
                                    }}>
                                        <Button type="submit" variant="contained" sx={{
                                            height: "90%",
                                            width: "8rem",
                                        }}>
                                            Accedi
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                )}
            </WrapperBox>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={4000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={() => setSnackbarOpen(false)}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>

        </>
    );
};

export default ForgotPassword;