import { Box, Icon, Stack, Typography } from "@mui/material";
import React from "react";

interface CardsProps {
    typology: string;
    when: string;
    icon: React.ElementType;
    numberTypology: number;
};

type Cards = {
    cards: CardsProps[];
    toggleColor: 'light' | 'dark';
};

const Cards = ({ cards, toggleColor }: Cards) => {

    return (
        <Box sx={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: { sm: "100%", xs: "auto" },
            width: "100%",
            flexWrap: "wrap",
            border: "4px solid blue",
            overflowY: "auto",
            overflowX: "hidden",
            maxHeight: "100%",
        }}>
            {(cards.length === 0 || !Array.isArray(cards)) ? (
                <Typography variant="h6" color="error">No cards available</Typography>
            ) : (
                <>
                    {/* scroll wrapper: becomes column+scroll on small screens */}
                    <Box sx={{
                        minWidth: '100%',
                        height: "100%",
                        display: 'flex',
                        flexDirection: { sm: 'row', xs: 'column' },
                        alignItems: { md: "stretch", xs: "center" },
                        justifyContent: { sm: "center", xs: "flex-start"},
                        flexWrap: { sm: "wrap", xs: "nowrap" },
                        // gap: 2,
                        overflowY: { lg: "auto", xs: "visible" },
                        overflowX: "hidden",
                        maxHeight: { md: "100%", xs: "calc(100vh - 10rem)"}, // lascia spazio per header e padding
                        px: { md: 0, xs: 2 },
                        py: { md: 0.5, xs: 2 },
                        border: "4px dotted yellow",
                    }}>
                        {
                            cards.map((card: CardsProps) => {
                                return (
                                    <Box key={card.numberTypology} sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexWrap: "wrap",
                                        height: { lg: "260px", xs: "180px" },
                                        width: { lg: "330px", xs: "220px" },
                                        border: "1px solid gray",
                                        borderRadius: "8px",
                                        mx: 2,
                                        my: { lg: 0.5, md: 1, xs: 1 },
                                    }}>
                                        <Box sx={{
                                            position: "relative",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            height: "50%",
                                            width: "100%",
                                            border: "1px solid green",
                                        }}>
                                            <Stack spacing={2} sx={{
                                                height: "100%",
                                                width: "auto",
                                                minWidth: 160,
                                                border: "2px solid darkviolet",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}>
                                                <Typography variant="h5" sx={{ textAlign: "center" }}>{card.typology}</Typography>
                                                <Typography variant="subtitle1" sx={{ textAlign: "center" }}>{card.when}</Typography>
                                            </Stack>
                                            <Box sx={{
                                                position: "relative",
                                                display: "flex",
                                                height: "auto",
                                                maxHeight: "100%",
                                                width: "100%",
                                                justifyContent: "flex-end",
                                                border: "2px solid orange",
                                            }}>
                                                <Icon sx={{
                                                    position: "relative",
                                                    display: "flex",
                                                    height: "100%",
                                                    width: "100%",
                                                    justifyContent: "flex-end",
                                                }}>{React.createElement(card.icon as React.ElementType, { style: { fontSize: 50 } })}</Icon>
                                            </Box>
                                        </Box>
                                        <Box sx={{
                                            position: "relative",
                                            display: "flex",
                                            height: "50%",
                                            width: "100%",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            border: "2px solid purple",
                                        }}>
                                            <Typography variant="h1" fontSize={50} sx={{ color: toggleColor === 'dark' ? "rgba(255, 255, 255, 0.6)" : "rgba(130, 130, 130, 0.6)" }}>{card.numberTypology}</Typography>
                                        </Box>
                                       
                                    </Box>
                                );
                            })
                        }
                    </Box>
                </>
            )}
        </Box>
    );
};

export default Cards;