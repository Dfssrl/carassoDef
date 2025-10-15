'use client';

import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import { useState } from 'react';
import { blue, grey, red } from '@mui/material/colors';

dayjs.extend(isoWeek);

interface toggleProps {
    toggle: 'light' | 'dark';
}

export default function WeekStrip({ toggle }: toggleProps) {
    const [currentWeekStart, setCurrentWeekStart] = useState(dayjs().startOf('week'));
    const [selectedDay, setSelectedDay] = useState<dayjs.Dayjs | null>(null);

    const days = Array.from({ length: 5 }, (_, i) =>
        currentWeekStart.add(i + 1, 'day')
    );

    const handlePrevWeek = () => {
        setCurrentWeekStart((prev) => prev.subtract(1, 'day'));
    };

    const handleNextWeek = () => {
        setCurrentWeekStart((prev) => prev.add(1, 'day'));
    };

    // const handleSelectDay = (day: dayjs.Dayjs) => {
    //     setSelectedDay(day);
    //     console.log('Selected day:', day.format('YYYY-MM-DD')); // oppure passa il valore dove ti serve
    // };

    return (
        <Box
            position='relative'
            display="flex"
            alignItems="center"
            justifyContent='center'
            height="auto"
            maxWidth="100%"
            bgcolor="transparent"
            color={grey[500]}
            borderRadius={2}
            boxShadow={1}
        >
            <Box sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'start',
                justifyContent: 'space-between',
                height: '100%',
                width: '100%',
            }}>
                <IconButton onClick={handlePrevWeek}
                    sx={{ color: toggle === 'dark' ? grey[200] : grey[800]}}
                >
                    <ArrowBack />
                </IconButton>
                {days.map((day) => (
                    <Box
                        key={day.format('YYYY-MM-DD')}
                        width='100%'
                        maxWidth="100%"
                        textAlign="center"
                        borderRadius={1}
                        onClick={() => setSelectedDay(day)}
                        bgcolor={selectedDay?.isSame(day, 'day') ? blue['A700'] : 'transparent'}
                        color={day.day() === 0 ? red['A700'] : (toggle === 'dark' ? grey[200] : grey[800])}
                        border={`1px solid ${grey[400]}`}
                        mx={0.3}
                        p={0.5}
                        sx={{ cursor: 'pointer' }}
                    >
                        <Typography variant="body2">{day.format('ddd')}</Typography>
                        <Typography variant="subtitle2">{day.format('D')}</Typography>
                    </Box>
                ))}
                <IconButton onClick={handleNextWeek}
                    sx={{ color: toggle === 'dark' ? grey[200] : grey[800]}}
                >
                    <ArrowForward />
                </IconButton>
            </Box>
        </Box>
    );
}
