import React, { useContext } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { IconButton } from "@mui/material";
import { DataContext } from "../../providers/DataProvider";
import { iconButtonStyle } from "../constants/styles";

const Reset = () => {
    const { setIsPlaying, duration, setTime } = useContext(DataContext);

    const toggleReset = () => {
        setIsPlaying(false);

        setTimeout(() => {
            setTime(duration);
        }, 1000);
    };

    return (
        <IconButton onClick={toggleReset}>
            <RestartAltIcon sx={iconButtonStyle} />
        </IconButton>
    );
};

export default Reset;
