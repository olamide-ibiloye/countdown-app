import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";

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
        setValue(value - 1);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton onClick={toggleUp}>
                <KeyboardArrowUpIcon sx={buttonStyle} />
            </IconButton>

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
