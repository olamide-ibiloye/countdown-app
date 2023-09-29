import React, { useEffect, useState } from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { IconButton } from "@mui/material";
import { iconButtonStyle } from "../constants/styles";

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

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);

        return () => {
            document.removeEventListener(
                "fullscreenchange",
                handleFullscreenChange
            );
        };
    }, []);

    return (
        <IconButton onClick={toggleFullscreen}>
            {isFullscreen && <FullscreenExitIcon sx={iconButtonStyle} />}
            {!isFullscreen && <FullscreenIcon sx={iconButtonStyle} />}
        </IconButton>
    );
};

export default FullScreen;
