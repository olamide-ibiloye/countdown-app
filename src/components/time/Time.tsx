import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

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
        <Box>
            <Typography
                variant="h1"
                sx={{
                    color: "white",
                    fontWeight: 900,
                    fontSize: {
                        xs: 100,
                        sm: 150,
                        md: 200,
                        lg: 350,
                        xl: 450,
                    },
                    display: "flex",
                    flex: 1,
                }}
            >
                {currentTime}
            </Typography>
        </Box>
    );
};

export default Time;
