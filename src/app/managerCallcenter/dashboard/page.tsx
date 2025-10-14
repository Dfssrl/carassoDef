"use client";
import style from "./style.module.css";
import DashBoardComponent from "@/components/dashboard/DashBoard";
import WrapperBox from "@/components/WrapperBox/wrapperBox";

import { useState } from "react";
import { Box, Stack } from "@mui/material"


export default function Page() {
    const [toggle, setToggle] = useState<"light" | "dark">("dark");
    return (
        <WrapperBox>
            <Box
                className={style.dashboard_container}
                sx={{
                    backgroundColor: toggle === 'light' ? 'rgb(230, 230, 230)' : 'rgb(57, 57, 57)',
                    color: toggle === 'light' ? 'black' : 'white',
                }}
            >
                <Box sx={{
                    position: "relative",
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "flex-end", /* non centrare verticalmente: lascia più spazio */
                }}>
                    <Stack spacing={1} sx={{ width: '100%', paddingTop: "100px" }}>
                        <DashBoardComponent toggle={toggle} setToggle={setToggle} />
                        
                    </Stack>
                </Box>
            </Box>
        </WrapperBox>
    )
};

//export default DashBoard;