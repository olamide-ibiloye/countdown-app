import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useContext } from "react";
import { hoursIncludedTextSize } from "../constants/styles";
import { DataContext } from "../../providers/DataProvider";

const buttonStyle = { fontSize: 60, color: "white" };

interface FigureBlockProps {
    toggle: string;
    value: number;
}

const FigureBlock: React.FC<FigureBlockProps> = ({ toggle, value }) => {
    const { timeItems, setTimeItems } = useContext(DataContext);

    const toggleUp = () => {
        if (toggle === "hours") {
            setTimeItems({
                ...timeItems,
                hours: timeItems.hours === 59 ? 0 : timeItems.hours + 1,
            });
        }

        if (toggle === "minutes") {
            setTimeItems({
                ...timeItems,
                minutes: timeItems.minutes === 59 ? 0 : timeItems.minutes + 1,
            });
        }

        if (toggle === "seconds") {
            setTimeItems({
                ...timeItems,
                seconds: timeItems.seconds === 59 ? 0 : timeItems.seconds + 1,
            });
        }
    };

    const toggleDown = () => {
        if (toggle === "hours" && timeItems.hours > 0) {
            setTimeItems({ ...timeItems, hours: timeItems.hours - 1 });
        }

        if (toggle === "minutes" && timeItems.minutes > 0) {
            setTimeItems({ ...timeItems, minutes: timeItems.minutes - 1 });
        }

        if (toggle === "seconds" && timeItems.seconds > 0) {
            setTimeItems({ ...timeItems, seconds: timeItems.seconds - 1 });
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
