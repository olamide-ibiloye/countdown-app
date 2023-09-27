import { Button } from "@mui/material";
import * as React from "react";
import { DataContext } from "../../providers/DataProvider";
import { getMilliseconds } from "../../utils/getMilliseconds";

const SetTime = () => {
    const {
        feature,
        editMode,
        setEditMode,
        setIsPlaying,
        timeItems,
        setTimeItems,
    } = React.useContext(DataContext);

    const handleClick = () => {
        if (editMode) {
            if (
                timeItems.hours !== 0 ||
                timeItems.minutes !== 0 ||
                timeItems.seconds !== 0
            ) {
                const newDuration = getMilliseconds(timeItems);
                setTimeItems({ ...timeItems, totalMilliseconds: newDuration });

                setIsPlaying(false);
                setEditMode(!editMode);
            }
        } else {
            setIsPlaying(false);
            setEditMode(!editMode);
        }
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
