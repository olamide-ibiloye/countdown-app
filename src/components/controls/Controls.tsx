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
            }}
        >
            <Box sx={{ flex: 1 }}>
                <SetTime />
            </Box>
            <Box>
                <ButtonGroup />
            </Box>
        </Box>
    );
};

export default Controls;
