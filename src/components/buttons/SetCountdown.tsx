import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";
import { DataContext } from "../../providers/DataProvider";
import { getMilliseconds } from "../../utils/getMilliseconds";
import { iconButtonStyle } from "../constants/styles";

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
                setTimeItems((prevState) => ({
                    ...prevState,
                    totalMilliseconds: newDuration,
                }));

                setIsPlaying(false);
                setEditMode(!editMode);
            }
        } else {
            setIsPlaying(false);
            setEditMode(!editMode);
        }
    };

    const handleClose = () => {
        setEditMode(!editMode);
    };

    return (
        <>
            {editMode && (
                <IconButton onClick={handleClose}>
                    <CloseIcon sx={iconButtonStyle} />
                </IconButton>
            )}

            <Button
                variant="contained"
                size="large"
                onClick={handleClick}
                sx={{
                    display: feature === "countdown" ? "block" : "none",
                    ml: 2,
                    padding: 3,
                }}
            >
                {editMode ? "Confirm" : "Set Countdown"}
            </Button>
        </>
    );
};

export default SetTime;
