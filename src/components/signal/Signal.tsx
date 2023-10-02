import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useContext } from "react";
import { messageTextStyle } from "../constants/styles";
import { DataContext } from "../../providers/DataProvider";

interface SignalProps {
    message: string;
    closeButton?: boolean;
    style?: object;
}

const displayStyles = {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    backgroundColor: "red",
    zIndex: 1500,
    animation: "blink 4s infinite",
    "@keyframes blink": {
        "100%": {
            backgroundColor: "red",
            color: "white",
        },
        "50%": {
            backgroundColor: "white",
            color: "red",
        },
    },
};

const Signal = ({ message, closeButton = true, style = {} }: SignalProps) => {
    const { setShowTimeUp, setIsPlaying } = useContext(DataContext);

    const handleClick = () => {
        setShowTimeUp(false);
        setIsPlaying(false);
    };

    return (
        <Box sx={{ ...displayStyles, ...style, ...messageTextStyle }}>
            {closeButton && (
                <IconButton
                    onClick={handleClick}
                    sx={{ position: "absolute", right: 0, top: 0 }}
                >
                    <CloseIcon sx={{ fontSize: 100 }} />
                </IconButton>
            )}

            {message.toUpperCase()}
        </Box>
    );
};

export default Signal;
