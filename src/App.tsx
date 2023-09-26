import React from "react";
import { Controls, Display, Navigation } from "./components";
import { Box } from "@mui/material";
import DataProvider from "./providers/DataProvider";
import TimeUp from "./components/timeUp/TimeUp";

const displayStyles = {
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "black",
    display: "grid",
    gridTemplateRows: "repeat(3, 1fr)",
    px: 5,
};

const App = () => {
    return (
        <DataProvider>
            <TimeUp />
            <Box sx={displayStyles}>
                <Controls />
                <Display />
                <Navigation />
            </Box>
        </DataProvider>
    );
};

export default App;
