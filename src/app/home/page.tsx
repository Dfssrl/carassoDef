import style from "./style.module.css";
import Login from "../login/page";
import Header from "@/components/header/header";
import BodyCard from "@/components/main/bodyCard";

import { useState } from "react";
import { Box, Stack } from "@mui/material"


const FirstPage = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [toggle, setToggle] = useState<"light" | "dark">("dark");
    return (
        <Box
            className={style.home_container}
            sx={{
                backgroundColor: toggle === 'light' ? 'rgb(230, 230, 230)' : 'rgb(57, 57, 57)',
                color: toggle === 'light' ? 'black' : 'white',
            }}
        >
            {
                isLogin ?
                    (
                        <Login />
                    ) : (
                        <Box sx={{
                            position: "relative",
                            display: "flex",
                            height: "100%",
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "flex-end", /* non centrare verticalmente: lascia più spazio */
                        }}>
                            <Stack spacing={1} sx={{ width: '100%', paddingTop: "100px" }}>
                                <Header stateToggle={toggle} setStateToggle={setToggle} startLogin={new Date().getTime()} />
                                <BodyCard />
                            </Stack>
                        </Box>
                    )
            }
        </Box>
    )
};

export default FirstPage;