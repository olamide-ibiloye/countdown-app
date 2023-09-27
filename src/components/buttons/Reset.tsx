import React, { useContext } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { IconButton } from "@mui/material";
import { DataContext } from "../../providers/DataProvider";
import { getMilliseconds } from "../../utils/getMilliseconds";
import { iconButtonStyle } from "../constants/styles";

const Reset = () => {
    const {
        editMode,
        setEditMode,
        setDuration,
        hours,
        minutes,
        seconds,
        isPlaying,
        setIsPlaying,
    } = useContext(DataContext);

    const toggleReset = () => {
        if (isPlaying) {
            setIsPlaying(false);
        }

        const newDuration = getMilliseconds({ hours, minutes, seconds });

        setDuration(newDuration);

        if (editMode) {
            setEditMode(false);
        }
    };

    return (
        <IconButton onClick={toggleReset}>
            <RestartAltIcon sx={iconButtonStyle} />
        </IconButton>
    );
};

export default Reset;
