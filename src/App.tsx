import React, { useContext } from "react";
import { Box } from "@mui/material";
import { Main, TimeUp } from "./components";
import { DataContext } from "./providers/DataProvider";

const App = () => {
    const { showTimeUp } = useContext(DataContext);

    return (
        <Box
            sx={{
                height: "100vh",
                width: "100vw",
                backgroundColor: "black",
            }}
        >
            {showTimeUp && <TimeUp />}
            <Main />
        </Box>
    );
};

export default App;
