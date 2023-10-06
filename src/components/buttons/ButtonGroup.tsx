import { Box } from "@mui/material";
import React, { useContext } from "react";
import FullScreen from "./FullScreen";
import PlayAndPause from "./PlayAndPause";
import Reset from "./Reset";
import { DataContext } from "../../providers/DataProvider";

const ButtonGroup = () => {
    const { feature } = useContext(DataContext);

    return (
        <Box>
            {feature === "countdown" && (
                <>
                    <PlayAndPause />
                    <Reset />
                </>
            )}
            <FullScreen />
        </Box>
    );
};

export default ButtonGroup;
