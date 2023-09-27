import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { hoursIncludedTextSize } from "../constants/styles";

const Time = () => {
    const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());

    function getCurrentTime() {
        return new Date().toLocaleTimeString("en-US", {
            hour12: false,
        });
    }

    useEffect(() => {
        setTimeout(() => {
            setCurrentTime(getCurrentTime());
        }, 1000);
    }, [currentTime]);

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
                    fontSize: hoursIncludedTextSize,
                }}
            >
                {currentTime}
            </Typography>
        </Box>
    );
};

export default Time;
