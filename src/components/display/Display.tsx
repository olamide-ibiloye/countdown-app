import { Box } from "@mui/material";
import React, { useContext } from "react";
import CountDown from "../countdown/CountDown";
import { DataContext } from "../../providers/DataProvider";
import Time from "../time/Time";
import Message from "../message/Message";
import EditCountDown from "../editCountdown/EditCountDown";
import EditMessage from "../editMessage/EditMessage";

const Display = () => {
    const { feature, editMode } = useContext(DataContext);

    return (
        <Box
            sx={{
                height: "70vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {feature === "countdown" && !editMode && <CountDown />}
            {feature === "countdown" && editMode && <EditCountDown />}
            {feature === "time" && <Time />}
            {feature === "message" && !editMode && <Message />}
            {feature === "message" && editMode && <EditMessage />}
        </Box>
    );
};

export default Display;
