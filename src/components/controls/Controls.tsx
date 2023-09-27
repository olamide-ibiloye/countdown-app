import { Box } from "@mui/material";
import React from "react";
import { SetTime, ButtonGroup } from "../buttons";

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
                <SetTime />
            </Box>
            <Box sx={{ display: "flex" }}>
                <ButtonGroup />
            </Box>
        </Box>
    );
};

export default Controls;
