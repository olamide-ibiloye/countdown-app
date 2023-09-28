import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import { messageTextStyle } from "../constants/styles";

const TimeUp = () => {
    const { setShowTimeUp, setIsPlaying } = useContext(DataContext);

    const displayStyles = {
        height: "100vh",
        width: "100vw",
        backgroundColor: "red",
        position: "absolute",
        zIndex: 1500,
    };

    const handleClick = () => {
        setShowTimeUp(false);
        setIsPlaying(false);
    };

    const timeUpMessage = "Time's Up";

    return (
        <Box sx={displayStyles}>
            <IconButton
                onClick={handleClick}
                sx={{ position: "absolute", right: 0 }}
            >
                <CloseIcon sx={{ fontSize: 100, color: "white" }} />
            </IconButton>

            <Typography variant="h1" sx={messageTextStyle}>
                {timeUpMessage.toUpperCase()}
            </Typography>
        </Box>
    );
};

export default TimeUp;
