"use client";

import { useEffect, useState } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!time) return null;
    return (
        <div>
            <p>Data e ora: {time.toLocaleString("it-IT")}</p>
        </div>
    );
}

export default Clock;