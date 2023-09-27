import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { getFormattedTime } from "../../utils/getFormattedTime";
import { DataContext } from "../../providers/DataProvider";
import {
    hoursExcludedTextSize,
    hoursIncludedTextSize,
} from "../constants/styles";

const Timer = () => {
    const { timeItems } = useContext(DataContext);

    let hourIncluded: boolean = timeItems.hours > 0;

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
                {getFormattedTime(timeItems.totalMilliseconds)}
            </Typography>
        </Box>
    );
};

export default Timer;
