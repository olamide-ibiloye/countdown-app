import React, { useState } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import { IconButton } from "@mui/material";

const buttonStyle = { fontSize: 60, color: "white" };

const PlayAndPause = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
        setIsPlaying(!isPlaying);
    };

    const pause = () => {};

    const play = () => {};
    return (
        <IconButton onClick={togglePlay}>
            {!isPlaying && <PlayCircleOutlineIcon sx={buttonStyle} />}
            {isPlaying && <PauseCircleOutlineIcon sx={buttonStyle} />}
        </IconButton>
    );
};

export default PlayAndPause;
