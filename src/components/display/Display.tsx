import { Box } from "@mui/material";
import React, { useContext } from "react";
import CountDown from "../countdown/CountDown";
import { DataContext } from "../../providers/DataProvider";
import Time from "../time/Time";
import Message from "../message/Message";

const Display = () => {
    const { feature } = useContext(DataContext);

    return (
        <Box>
            {feature === "countdown" && <CountDown duration={10 * 1000} />}
            {feature === "time" && <Time />}
            {feature === "message" && <Message />}
        </Box>
    );
};

export default Display;
