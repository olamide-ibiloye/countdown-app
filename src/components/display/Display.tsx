import { Box } from "@mui/material";
import React, { useContext } from "react";
import CountDown from "../countdown/CountDown";
import { DataContext } from "../../providers/DataProvider";
import Time from "../time/Time";
import Message from "../message/Message";
import EditCountDown from "../editCountdown/EditCountDown";

const Display = () => {
    const { feature, editMode } = useContext(DataContext);

    return (
        <Box>
            {feature === "countdown" && !editMode && <CountDown />}
            {feature === "countdown" && editMode && <EditCountDown />}
            {feature === "time" && <Time />}
            {feature === "message" && <Message />}
        </Box>
    );
};

export default Display;
