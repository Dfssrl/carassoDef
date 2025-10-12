"use client";
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
            overflowY: "auto",
            overflowX: "hidden",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
            border: "3px solid white",
            p: 0,
            m: 0,
        }}>
            {children}
        </Box>
    );
};

export default WrapperBox;