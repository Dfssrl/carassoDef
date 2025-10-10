import { Box } from "@mui/material";
import React from "react";

interface WrapperBoxProps {
    children: React.ReactNode;
}

const WrapperBox: React.FC<WrapperBoxProps> = ({ children }) => {
    return (
        <Box sx={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            height: "100vh",
            width: "100vw",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(245, 245, 245, 0.8)",
        }}>
            {children}
        </Box>
    );
};

export default WrapperBox;