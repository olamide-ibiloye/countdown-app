import { Button } from "@mui/material";
import * as React from "react";
import { DataContext } from "../../providers/DataProvider";
import { getMilliseconds } from "../../utils/getMilliseconds";

const SetTime = () => {
    const {
        feature,
        editMode,
        setEditMode,
        setDuration,
        hours,
        minutes,
        seconds,
    } = React.useContext(DataContext);

    const handleClick = () => {
        if (editMode) {
            const newDuration = getMilliseconds({ hours, minutes, seconds });

            setDuration(newDuration);
        }

        setEditMode(!editMode);
    };

    return (
        <Button
            variant="contained"
            size="large"
            onClick={handleClick}
            sx={{ display: feature === "countdown" ? "block" : "none" }}
        >
            {editMode ? "Submit" : "Set Time"}
        </Button>
    );
};

export default SetTime;
