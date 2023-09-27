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
        timeItems,
        setTimeItems,
    } = useContext(DataContext);

    const togglePlay = () => {
        if (!editMode) setIsPlaying(!isPlaying);

        if (editMode) {
            if (
                timeItems.hours !== 0 ||
                timeItems.minutes !== 0 ||
                timeItems.seconds !== 0
            ) {
                setIsPlaying(!isPlaying);

                setTimeItems({
                    ...timeItems,
                    totalMilliseconds: getMilliseconds(timeItems),
                });

                setEditMode(!editMode);
            }
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
