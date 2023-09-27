import React, { useContext } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import { IconButton } from "@mui/material";
import { DataContext } from "../../providers/DataProvider";

const buttonStyle = { fontSize: 60, color: "white" };

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
            {!isPlaying && <PlayCircleOutlineIcon sx={buttonStyle} />}
            {isPlaying && <PauseCircleOutlineIcon sx={buttonStyle} />}
        </IconButton>
    );
};

export default PlayAndPause;
