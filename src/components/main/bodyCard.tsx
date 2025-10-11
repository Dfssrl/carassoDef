import { Box, Typography } from "@mui/material"
import { mockCards } from "../mock";
import Cards from "../cards/Cards";

const BodyCard = () => {
    return (
        <Box sx={{
            position: "relative",
            display: "flex",
            height: "calc(100vh - 160px)",
            justifyContent: "center",
            alignItems: "start",
            border: "2px solid white",
        }}>
            <Cards cards={mockCards} />
        </Box>
    );
};

export default BodyCard;