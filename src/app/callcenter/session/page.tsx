"use client";
import styles from "./style.module.css";
import WrapperBox from "@/components/WrapperBox/wrapperBox";

import { useState } from "react";
import WrapperBoxSession from "./wrapperBox";

export default function Session() {
    const [toggle, setToggle] = useState<"light" | "dark">("dark");

    return (
        <WrapperBox>
            <WrapperBoxSession
                toggle={toggle}
                setToggle={setToggle}
                operator="New Saloon beauty"
                className={styles.session}
                startLogin={new Date().getTime()}
            />
        </WrapperBox>
    )
}