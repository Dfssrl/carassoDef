import styles from "./style.module.css";

import { useState } from "react";
import { Box, Button, ButtonBase, Grid, ListItem, Paper, Stack, styled, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import WeeklyCalendar from "./calendar";

interface toggleColor {
    toggle: 'light' | 'dark';
};

export default function WorkComponent({ toggle }: toggleColor) {
    const valueBtn = [1, 2, 3];
    const timeSlot = [
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00"
    ];
    const [btnValue, setBtnValue] = useState<number>(0);
    const [checkTimeSlot, setCheckTimeSlot] = useState("");

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: 'transparent',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: toggle === 'dark' ? grey[200] : grey[800],
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
        cursor: 'pointer',
    }));

    return (
        <Box className={styles.work_component} sx={{
            maxHeight: "calc(100vh - 250px)",
            minHeight: "35rem",
            width: "100%",
        }}>
            <Box className={styles.work_calendar}
                sx={{ width: '100%', height: '100%' }}
            >
                <Stack spacing={1} sx={{
                    height: "100%",
                    width: "20%",
                    minWidth: '290px',
                    border: "2px solid white",
                }}>
                    <Box className={styles.col_session} sx={{
                        height: '3rem',
                        width: '100%',
                        maxWidth: '100%',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <Box component='div' sx={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'row',
                            pl: 1,
                            color: toggle === 'dark' ? grey[200] : grey[800],
                        }}>
                            Cabina
                        </Box>
                        <Box component='div' sx={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            width: '50%',
                            pr: 1,
                        }}>
                            {
                                valueBtn.map((num, ind) => {
                                    return (
                                        <ButtonBase
                                            key={ind}
                                            onClick={() => setBtnValue(num)}
                                            sx={{
                                                height: 30,
                                                width: 30,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: btnValue === num ? blue['A700'] : 'transparent',
                                                border: `1px solid ${grey[400]}`,
                                                color: toggle === 'dark' ? grey[200] : grey[800],
                                                mx: 1,
                                                fontWeight: 600,
                                                fontSize: '1.1rem',
                                                ':hover': {
                                                    backgroundColor: blue['A700'],
                                                    color: 'white',
                                                    fontWeight: 600,
                                                }
                                            }}>
                                            {num}
                                        </ButtonBase>
                                    )
                                })
                            }
                        </Box>
                    </Box>
                    <Box className={styles.col_session} sx={{
                        height: '6rem',
                        width: '100%',
                        maxWidth: '100%',
                    }}>
                        <Stack spacing={1} sx={{
                            height: '99%',
                            width: '99%',
                            gap: '0 0.5rem',
                            backgroundColor: 'transparent',
                        }}>
                            <Box sx={{
                                width: '100%',
                                pl: 1
                            }}>
                                <Typography color={toggle === 'dark' ? grey[200] : grey[800]}>Calendar</Typography>
                            </Box>
                            <WeeklyCalendar toggle={toggle} />
                        </Stack>
                    </Box>
                    <Box className={styles.col_session} sx={{
                        height: '12rem',
                        width: '100%',
                        maxWidth: '100%',
                    }}>
                        <Stack spacing={1} sx={{
                            height: '99%',
                            width: '99%',
                        }}>
                            <Box sx={{
                                position: 'relative',
                                display: 'flex',
                                height: '1.2rem',
                                width: '100%',
                                pl: 1,
                            }}>
                                <Typography color={toggle === 'dark' ? grey[200] : grey[800]}>Fascia oraria</Typography>
                            </Box>
                            <Box sx={{
                                position: 'relative',
                                display: 'flex',
                                height: 'auto',
                                maxHeight: '90%',
                                width: '100%',
                                px: 0.4,
                            }}>
                                <Grid container spacing={0.3} columns={5}>
                                    {
                                        timeSlot.map((slot, index) => {
                                            return (
                                                <Grid size={1} key={index}>
                                                    <Button
                                                        size="small"
                                                        variant="contained"
                                                        onClick={() => setCheckTimeSlot(slot)}
                                                        sx={{
                                                            color: toggle === 'dark' ? grey[200] : grey[800],
                                                            backgroundColor: checkTimeSlot === slot ? blue['A700'] : 'transparent',
                                                            fontWeight: 600,
                                                            letterSpacing: '0.8px',
                                                            '&:hover': {
                                                                backgroundColor: blue['A700'],
                                                                color: 'white',
                                                            }
                                                        }}
                                                    >
                                                        {slot}
                                                    </Button>
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Box>
                        </Stack>
                    </Box>
                    <Box className={styles.col_session} sx={{
                        height: '12rem',
                        width: '100%',
                        maxWidth: '100%',
                    }}>Ciao</Box>
                </Stack>
            </Box >
            <Box></Box>
            <Box></Box>
        </Box >
    )
}