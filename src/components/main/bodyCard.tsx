import { Box, Typography } from "@mui/material"
import { mockCards } from "../mock";
import Cards from "../cards/Cards";

const BodyCard = () => {
    {/** Quando passa a mobile il contenitore sarà altezza auto e il genitore
        ad altezza fissa di modo che quando imposterò lo scroll Y si potrà vedere senza creare rotture dei componenti */}
    return (
        <Box sx={{
            position: "relative",
            display: "flex",
            height: { lg: "calc(100vh - 160px)", md: "calc(100vh - 130px)", xs: "calc(100vh - 160px)" },
            flexWrap: "wrap",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "start",
            border: "2px solid white",
        }}>
            <Cards cards={mockCards} />
        </Box>
    );
};

export default BodyCard;