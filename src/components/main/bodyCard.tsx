import { Box, Button } from "@mui/material"
import { mockCards } from "../mock";
import Cards from "../cards/Cards";
import { CardsProps } from "@/@types/CardsProps";
import { FC } from "react";

interface BodyCardProps {
    data: CardsProps[];
    toggleColor: 'light' | 'dark';
}

const BodyCard: FC<BodyCardProps> = ({
    data,
    toggleColor
}) => {
    const dataCards = data.length === 0 ? mockCards : data;
    return (
        <Box sx={{
            position: "relative",
            display: "flex",
            height: { lg: "calc(100vh - 160px)", md: "calc(100vh - 130px)", xs: "calc(100vh - 160px)" },
            flexWrap: "wrap",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "start",
            // border: "2px solid red",
        }}>
            <Cards cards={dataCards} toggleColor={toggleColor} />
            
        </Box>
    );
};

export default BodyCard;