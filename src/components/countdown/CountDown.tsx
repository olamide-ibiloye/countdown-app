import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { getFormattedTime } from "../../utils/getFormattedTime";
import { DataContext } from "../../providers/DataProvider";
import {
    hoursExcludedTextSize,
    hoursIncludedTextSize,
} from "../constants/styles";

const Timer = () => {
    const { setShowTimeUp, duration, isPlaying } = useContext(DataContext);
    const [time, setTime] = useState<number>(duration);

    useEffect(() => {
        isPlaying &&
            time > 0 &&
            setTimeout(() => {
                setTime(time - 1000);
            }, 1000);

        if (time === 0) {
            setShowTimeUp(true);
        }
    }, [time, isPlaying, setShowTimeUp]);

    let hourIncluded: boolean = getFormattedTime(time).length > 5;

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
                {getFormattedTime(time)}
            </Typography>
        </Box>
    );
};

export default Timer;
