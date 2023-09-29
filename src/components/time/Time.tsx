import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { amPmHoursIncludedTextSize } from "../constants/styles";
import { DataContext } from "../../providers/DataProvider";

const Time = () => {
    const { twentyFourHoursFormat } = useContext(DataContext);
    const [currentTime, setCurrentTime] = useState<string>(
        new Date().toLocaleTimeString("en-US", {
            hour12: !twentyFourHoursFormat,
        })
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(
                new Date().toLocaleTimeString("en-US", {
                    hour12: !twentyFourHoursFormat,
                })
            );
        }, 1000);

        return () => clearInterval(intervalId);
    }, [twentyFourHoursFormat]);

    return (
        <Box
            sx={{
                height: "100%",
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
                    fontSize: amPmHoursIncludedTextSize,
                }}
            >
                {currentTime}
            </Typography>
        </Box>
    );
};

export default Time;
