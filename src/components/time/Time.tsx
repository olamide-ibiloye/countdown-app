import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../providers/DataProvider";
import { getCurrentTime } from "../../utils/functions";
import { sizes } from "../constants/styles";

const Time = () => {
    const { twentyFourHoursFormat } = useContext(DataContext);
    const [currentTime, setCurrentTime] = useState<string>(
        getCurrentTime(twentyFourHoursFormat)
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getCurrentTime(twentyFourHoursFormat));
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
                    fontSize: sizes.amPmHoursIncluded,
                }}
            >
                {currentTime}
            </Typography>
        </Box>
    );
};

export default Time;
