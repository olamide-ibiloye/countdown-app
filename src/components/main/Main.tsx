import { Box } from "@mui/material";
import React from "react";
import Controls from "../controls/Controls";
import Display from "../display/Display";
import Navigation from "../navigation/Navigation";

const displayStyles = {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateRows: "1fr 3fr 1fr",
};

const Main = () => {
    return (
        <Box sx={displayStyles}>
            <Controls />
            <Display />
            <Navigation />
        </Box>
    );
};

export default Main;
