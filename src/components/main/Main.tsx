import { Box } from "@mui/material";
import React, { useContext } from "react";
import Controls from "../controls/Controls";
import Display from "../display/Display";
import Navigation from "../navigation/Navigation";
import { DataContext } from "../../providers/DataProvider";

const displayStyles = {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateRows: "1fr 3fr 1fr",
};

const Main = () => {
    const { isVisible } = useContext(DataContext);

    return (
        <Box sx={displayStyles}>
            {isVisible ? <Controls /> : <Box></Box>}
            <Display />
            {isVisible ? <Navigation /> : <Box></Box>}
        </Box>
    );
};

export default Main;
