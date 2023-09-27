import React from "react";
import { Box } from "@mui/material";
import DataProvider from "./providers/DataProvider";
import { Main, TimeUp } from "./components";

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
                <Main />
            </Box>
        </DataProvider>
    );
};

export default App;
