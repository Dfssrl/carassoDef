import { Box, Typography } from "@mui/material"
import { JSX } from "react";

interface TimeLoginProps {
    startLogin: number;
}

const TimeLogin = ({ startLogin }: TimeLoginProps ): JSX.Element => {
    return (
        <Box>
            <Typography variant="body1">
                Login: {`${Number(startLogin).toLocaleString("it-IT")}`}
            </Typography>
        </Box>
    )
};

export default TimeLogin;