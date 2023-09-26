import React, { useState } from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { IconButton } from "@mui/material";

const buttonStyle = { fontSize: 60, color: "white" };

const FullScreen = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        if (isFullscreen) {
            exitFullscreen();
        } else {
            enterFullscreen();
        }
        setIsFullscreen(!isFullscreen);
    };

    const enterFullscreen = () => {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
    };

    const exitFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    };

    return (
        <IconButton onClick={toggleFullscreen}>
            {isFullscreen && <FullscreenExitIcon sx={buttonStyle} />}
            {!isFullscreen && <FullscreenIcon sx={buttonStyle} />}
        </IconButton>
    );
};

export default FullScreen;
