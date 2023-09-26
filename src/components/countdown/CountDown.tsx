import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { getFormattedTime } from "../../utils/getFormattedTime";
import { DataContext } from "../../providers/DataProvider";

const Timer = () => {
    const { setShowTimeUp, duration } = useContext(DataContext);
    const [time, setTime] = useState<number>(duration);

    useEffect(() => {
        time > 0 &&
            setTimeout(() => {
                setTime(time - 1000);
            }, 1000);

        if (time === 0) {
            setShowTimeUp(true);
        }
    }, [time, setShowTimeUp]);

    let hourIncluded: boolean = getFormattedTime(time).length > 5;

    return (
        <Box>
            <Typography
                variant="h1"
                sx={{
                    color: "white",
                    fontWeight: 900,
                    fontSize: {
                        xs: hourIncluded ? 100 : 150,
                        sm: hourIncluded ? 150 : 180,
                        md: hourIncluded ? 200 : 400,
                        lg: hourIncluded ? 350 : 550,
                        xl: hourIncluded ? 450 : 650,
                    },
                }}
            >
                {getFormattedTime(time)}
            </Typography>
        </Box>
    );
};

export default Timer;
