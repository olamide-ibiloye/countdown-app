import React, { useContext } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { IconButton } from "@mui/material";
import { DataContext } from "../../providers/DataProvider";
import { iconButtonStyle } from "../constants/styles";
import { getMilliseconds } from "../../utils/functions";

const Reset = () => {
    const { setIsPlaying, timeItems, setTimeItems } = useContext(DataContext);

    const toggleReset = () => {
        setIsPlaying(false);

        setTimeItems((prevState) => ({
            ...prevState,
            totalMilliseconds: getMilliseconds(timeItems),
        }));
    };

    return (
        <IconButton onClick={toggleReset}>
            <RestartAltIcon sx={iconButtonStyle} />
        </IconButton>
    );
};

export default Reset;
