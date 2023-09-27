import React, { useContext } from "react";
import FigureBlock from "./FigureBlock";
import { Box, Typography } from "@mui/material";
import { DataContext } from "../../providers/DataProvider";

const fontStyle = {
    color: "white",
    fontWeight: 900,
    fontSize: {
        xs: 100,
        sm: 150,
        md: 200,
        lg: 350,
        xl: 450,
    },
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
};

const EditCountDown = () => {
    const { hours, setHours, minutes, setMinutes, seconds, setSeconds } =
        useContext(DataContext);

    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
                <FigureBlock value={hours} setValue={setHours} />
                <Typography variant="h1" sx={fontStyle}>
                    :
                </Typography>
                <FigureBlock value={minutes} setValue={setMinutes} />
                <Typography variant="h1" sx={fontStyle}>
                    :
                </Typography>
                <FigureBlock value={seconds} setValue={setSeconds} />
            </Box>
        </Box>
    );
};

export default EditCountDown;
