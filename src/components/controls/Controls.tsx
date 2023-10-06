import React from "react";
import { Box } from "@mui/material";
import {
    SetCountdown,
    ButtonGroup,
    SetMessage,
    ToggleTimeFormat,
} from "../buttons";

const Controls = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "100vw",
                mx: { xs: 1, md: 10, lg: 25 },
            }}
        >
            <Box sx={{ display: "flex", flex: 1 }}>
                <SetCountdown />
                <SetMessage />
                <ToggleTimeFormat />
            </Box>

            <Box sx={{ display: "flex" }}>
                <ButtonGroup />
            </Box>
        </Box>
    );
};

export default Controls;
