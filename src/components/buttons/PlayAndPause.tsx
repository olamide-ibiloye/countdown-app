import React, { useContext } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import { IconButton } from "@mui/material";
import { DataContext } from "../../providers/DataProvider";
import { iconButtonStyle } from "../constants/styles";

const PlayAndPause = () => {
    const { isPlaying, setIsPlaying, editMode, setEditMode } =
        useContext(DataContext);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);

        if (!isPlaying && editMode) {
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
