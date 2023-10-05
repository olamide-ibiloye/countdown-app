import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import { getFormattedTime } from "../../utils/functions";
import { sizes } from "../constants/styles";

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
                        ? sizes.hoursIncluded
                        : sizes.hoursExcluded,
                }}
            >
                {currentTime}
            </Typography>
        </Box>
    );
};

export default Timer;
