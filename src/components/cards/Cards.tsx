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
};

const Cards = ({ cards }: Cards) => {

    return (
        <Box sx={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            flexWrap: "wrap",
            border: "2px solid blue",
        }}>
            {(cards.length === 0 || !Array.isArray(cards)) ? (
                <Typography variant="h6" color="error">No cards available</Typography>
            ) : (
                <>
                    {
                        cards.map((card: CardsProps) => {
                            return (
                                <Box key={card.numberTypology} sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexWrap: "wrap",
                                    height: "260px",
                                    width: "330px",
                                    border: "1px solid gray",
                                    borderRadius: "8px",
                                    mx: 2,
                                }}>
                                    <Box sx={{
                                        position: "relative",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "50%",
                                        width: "90%",
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
                                                height: "40%",
                                                width: "40%",
                                                justifyContent: "flex-end",
                                            }}>{React.createElement(card.icon as React.ElementType, { style: { fontSize: 60 } })}</Icon>
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
                                        <Typography variant="h1" fontSize={50} sx={{ color: "rgba(255, 255, 255, 0.6)" }}>{card.numberTypology}</Typography>
                                    </Box>
                                </Box>
                            );
                        })
                    }
                </>
            )}
        </Box>
    );
};

export default Cards;