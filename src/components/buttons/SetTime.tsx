import { Button } from "@mui/material";
import * as React from "react";
import { DataContext } from "../../providers/DataProvider";
import { getMilliseconds } from "../../utils/getMilliseconds";

const SetTime = () => {
    const {
        feature,
        editMode,
        setEditMode,
        hours,
        minutes,
        seconds,
        setIsPlaying,
        setDuration,
        setTime,
    } = React.useContext(DataContext);

    const handleClick = () => {
        if (editMode) {
            const newDuration = getMilliseconds({ hours, minutes, seconds });

            setDuration(newDuration);
            setTime(newDuration);
        }

        setIsPlaying(false);
        setEditMode(!editMode);
    };

    return (
        <Button
            variant="contained"
            size="large"
            onClick={handleClick}
            sx={{ display: feature === "countdown" ? "block" : "none", ml: 2 }}
        >
            {editMode ? "Submit" : "Set Time"}
        </Button>
    );
};

export default SetTime;
