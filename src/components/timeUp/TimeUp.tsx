import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";

const TimeUp = () => {
    const { showTimeUp, setShowTimeUp, setIsPlaying } = useContext(DataContext);

    const displayStyles = {
        height: "100vh",
        width: "100vw",
        backgroundColor: "red",
        position: "absolute",
        zIndex: 1500,
        display: showTimeUp ? "block" : "none",
    };

    const handleClick = () => {
        setShowTimeUp(false);
        setIsPlaying(false);
    };

    const timeUpMessage = "Time's Up";

    return (
        <Box sx={displayStyles}>
            <IconButton
                aria-label="close"
                onClick={handleClick}
                sx={{ position: "absolute", right: 0 }}
            >
                <CloseIcon sx={{ fontSize: 100, color: "white" }} />
            </IconButton>

            <Typography
                variant="h1"
                sx={{
                    color: "white",
                    fontWeight: 900,
                    textAlign: "center",
                    lineHeight: 0.9,
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
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
                {timeUpMessage.toUpperCase()}
            </Typography>
        </Box>
    );
};

export default TimeUp;
