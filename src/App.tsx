import React, { useContext } from "react";
import { Box } from "@mui/material";
import { Main, TimeUp } from "./components";
import { DataContext } from "./providers/DataProvider";
import Alert from "./components/alert/Alert";

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
            <Alert displayTimeMilliseconds={300000} />
            <Alert displayTimeMilliseconds={120000} />
            {showTimeUp && <TimeUp />}
            <Main />
        </Box>
    );
};

export default App;
