import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
import { hoursIncludedTextSize } from "../constants/styles";

const buttonStyle = { fontSize: 60, color: "white" };

interface FigureBlockProps {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}

const FigureBlock: React.FC<FigureBlockProps> = ({ value, setValue }) => {
    const toggleUp = () => {
        setValue(value + 1);
    };

    const toggleDown = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <IconButton onClick={toggleUp}>
                <KeyboardArrowUpIcon sx={buttonStyle} />
            </IconButton>

            <Typography
                variant="h1"
                sx={{
                    color: "white",
                    fontWeight: 900,
                    fontSize: hoursIncludedTextSize,
                }}
            >
                {value < 10 ? `0${value}` : value}
            </Typography>

            <IconButton onClick={toggleDown}>
                <KeyboardArrowDownIcon sx={buttonStyle} />
            </IconButton>
        </Box>
    );
};

export default FigureBlock;
