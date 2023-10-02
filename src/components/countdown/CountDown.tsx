import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";

import { DataContext } from "../../providers/DataProvider";
import {
    hoursExcludedTextSize,
    hoursIncludedTextSize,
} from "../constants/styles";
import { getFormattedTime } from "../../utils/functions";

const Timer = () => {
    const { timeItems } = useContext(DataContext);
    let currentTime = getFormattedTime(timeItems.totalMilliseconds);

    let hourIncluded: boolean = currentTime.length > 5;

    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    color: "white",
                    fontWeight: 900,
                    fontSize: hourIncluded
                        ? hoursIncludedTextSize
                        : hoursExcludedTextSize,
                }}
            >
                {currentTime}
            </Typography>
        </Box>
    );
};

export default Timer;
