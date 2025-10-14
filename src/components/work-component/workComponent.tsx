import styles from "./style.module.css";
import { Box, Stack } from "@mui/material";

export default function WorkComponent() {

    return (
        <Box className={styles.work_component}>
            <Box className={styles.work_calendar}>
                <Stack spacing={2} sx={{
                    height: "100%",
                    width: "30%",
                }}>
                    <Box>Ciao</Box>
                    <Box>Ciao</Box>
                    <Box>Ciao</Box>
                    <Box>Ciao</Box>
                </Stack>
            </Box>
            <Box></Box>
            <Box></Box>
        </Box>
    )
}