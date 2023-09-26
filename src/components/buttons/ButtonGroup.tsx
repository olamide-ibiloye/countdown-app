import { Box } from "@mui/material";
import React from "react";
import FullScreen from "./FullScreen";
import PlayAndPause from "./PlayAndPause";
import Reset from "./Reset";

const ButtonGroup = () => {
    return (
        <Box>
            <PlayAndPause />
            <Reset />
            <FullScreen />
        </Box>
    );
};

export default ButtonGroup;
