import styles from "./style.module.css";
import Clock from "../clocks/clock";
import MenuChooseActions from "../actionButtons/selectActions";
import LogoImage from "../logos/LogoImage";
import TimeLogin from "../time-login/TimeLogin";

import { Box } from "@mui/material"

interface HeaderProps {
    stateToggle: "light" | "dark";
    setStateToggle: (value: "light" | "dark") => void;
    startLogin: number;
}

const Header = ({ stateToggle, setStateToggle, startLogin }: HeaderProps) => {

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
            <Box className={styles.profile}>
                <Box className={styles.profile_box}>
                    Profile
                </Box>
            </Box>
            <Box className={styles.azioni}>
                <Box className={styles.azioni_box}>
                    <MenuChooseActions value={stateToggle} setValue={setStateToggle} logout={() => {}} />
                </Box>
            </Box>
        </Box>
    );
};

export default Header;