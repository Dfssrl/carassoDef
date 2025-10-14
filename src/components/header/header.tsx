import styles from "./style.module.css";
import Clock from "../clocks/clock";
import MenuChooseActions from "../actionButtons/selectActions";
import LogoImage from "../logos/LogoImage";
import TimeLogin from "../time-login/TimeLogin";

import { alpha, Box, Stack, Typography } from "@mui/material"
import { blue, green, grey } from "@mui/material/colors";

interface HeaderProps {
    stateToggle: "light" | "dark";
    setStateToggle: (value: "light" | "dark") => void;
    startLogin: number;
    operator: string;
}

const Header = ({
    stateToggle,
    setStateToggle,
    startLogin,
    operator
}: HeaderProps) => {

    return (
        <Box className={styles.container_header}>
            <Box className={styles.logo}>
                <Box className={styles.logo_image}>
                    <LogoImage inverted={stateToggle} />
                </Box>
            </Box>
            <Box className={styles.timer}>
                <Box className={styles.time_box}>
                    <Clock />
                    <TimeLogin startLogin={startLogin} />
                </Box>
            </Box>
            <Box className={styles.profile} sx={{
                width: operator !== 'Operator' ? '30%' : '45%',
            }}>
                <Box className={styles.profile_box}>
                    <Typography component="div" variant="subtitle1" fontWeight={700} sx={{
                        color: blue[800],
                    }}>
                        Lead name
                    </Typography>
                    <Typography component="div" variant="body1" sx={{
                        color: stateToggle === 'light' ? grey[800] : grey[400],
                    }}>
                        {operator}
                    </Typography>
                </Box>
            </Box>
            {
                operator !== 'Operator' ?
                    (
                        <Box className={styles.number}>
                            <Stack spacing={0} sx={{
                                height: '100%',
                                width: '100%',
                                alignItems: "end",
                                justifyContent: "center",
                                // border: "2px solid white",
                            }}>
                                <Box component='div' sx={{
                                    position: "relative",
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "2rem",
                                    width: "6rem",
                                    backgroundColor: alpha(green['A400'], 0.4),
                                    borderRadius: 3,
                                    color: 'white',
                                    // border: '2px solid blue',
                                }}>
                                    NUMBER
                                </Box>
                                <Typography variant="body1" fontWeight={500} color={stateToggle === 'light' ? grey[800] : grey[400]}>
                                    +393330001122
                                </Typography>
                            </Stack>
                        </Box>
                    ) : <></>
            }
            <Box className={styles.azioni}>
                <Box className={styles.azioni_box}>
                    <MenuChooseActions value={stateToggle} setValue={setStateToggle} logout={() => { }} />
                </Box>
            </Box>
        </Box>
    );
};

export default Header;