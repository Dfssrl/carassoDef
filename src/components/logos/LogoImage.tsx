import { Box } from "@mui/material"
import Image from "next/image";


interface SaloneVincenteProps {
    inverted: 'light' | 'dark';
}

const LogoImage = ({
    inverted
}: SaloneVincenteProps) => {
    const light = '/Salone vincente/Salone vincente/Salone-vincente-dark-invert.svg';
    const dark = '/Salone vincente/Salone vincente/Salone-vincente-light-invert.svg';

    return (
        <Box sx={{
            position: "relative",
            display: "flex",
            height: "100%",
            width: "100%",
            justifyContent: "center",
        }}>
            <Image src={inverted === 'light' ? dark : light} alt="" fill priority />
        </Box>
    )
};

export default LogoImage;