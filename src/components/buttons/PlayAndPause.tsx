import React, { useContext } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import { IconButton } from "@mui/material";
import { DataContext } from "../../providers/DataProvider";
import { iconButtonStyle } from "../constants/styles";
import { getMilliseconds } from "../../utils/getMilliseconds";

const PlayAndPause = () => {
    const {
        isPlaying,
        setIsPlaying,
        editMode,
        setEditMode,
        setDuration,
        setTime,
        hours,
        minutes,
        seconds,
    } = useContext(DataContext);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);

        if (!isPlaying && editMode) {
            const newDuration = getMilliseconds({ hours, minutes, seconds });

            setDuration(newDuration);
            setTime(newDuration);

            setEditMode(false);
        }
    };

    return (
        <IconButton onClick={togglePlay}>
            {!isPlaying && <PlayCircleOutlineIcon sx={iconButtonStyle} />}
            {isPlaying && <PauseCircleOutlineIcon sx={iconButtonStyle} />}
        </IconButton>
    );
};

export default PlayAndPause;
