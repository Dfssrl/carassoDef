"use client";
import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useState } from "react"

const ToggleBackground = () => {
    const [toggle, setToggle] = useState<"light" | "dark">("light");

    const handleChange = (
        _event: React.MouseEvent<HTMLElement>,
        newAlignment: "light" | "dark",
    ) => {
        setToggle(newAlignment);
    };

    return (
        <ToggleButtonGroup
            value={toggle}
            onChange={handleChange}
            sx={{
                height: "3rem",
                width: "15rem",
                borderRadius: "1.5rem",
                backgroundColor: toggle === "light" ? "#f0f0f0" : "#333",
            }}
        >
            <ToggleButton value="light" sx={{
                width: "50%", color: toggle === "light" ? "#000" : "#888"
            }}>
                Light
            </ToggleButton>
            <ToggleButton value="dark" sx={{
                width: "50%", color: toggle === "dark" ? "#000" : "#888"
            }}>
                Dark
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default ToggleBackground;