import { Box } from "@mui/material";
import React from "react";
import { TimeInput, ButtonGroup } from "../buttons";

const Controls = () => {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "5fr 1fr",
                gap: 3,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <TimeInput />
            <ButtonGroup />
        </Box>
    );
};

export default Controls;
