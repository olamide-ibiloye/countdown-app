import React from "react";
import { Controls, Display, Navigation } from "./components";
import { Box } from "@mui/material";
import DataProvider from "./providers/DataProvider";
import TimeUp from "./components/timeUp/TimeUp";

const displayStyles = {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateRows: "1fr 3fr 1fr",
};

const App = () => {
    return (
        <DataProvider>
            <Box
                sx={{
                    height: "100vh",
                    width: "100vw",
                    backgroundColor: "black",
                }}
            >
                <TimeUp />
                <Box sx={displayStyles}>
                    <Controls />
                    <Display />
                    <Navigation />
                </Box>
            </Box>
        </DataProvider>
    );
};

export default App;
