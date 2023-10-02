import * as React from "react";
import { DataContext } from "../../providers/DataProvider";

import CustomModifier from "../customized/CustomModifier";
import { getMilliseconds } from "../../utils/functions";

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
        <CustomModifier
            condition={editMode && feature === "countdown"}
            buttonName={editMode ? "Confirm" : "Set Countdown"}
            handleClose={handleClose}
            handleButtonClick={handleClick}
            style={{ display: feature === "countdown" ? "block" : "none" }}
        />
    );
};

export default SetTime;
