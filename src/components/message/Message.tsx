import { Box, Typography } from "@mui/material";
import React from "react";
import { messageTextSize } from "../constants/styles";

const Message = () => {
    const userMessage = "This is a default message";

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
                    fontSize: messageTextSize,
                    textAlign: "center",
                    lineHeight: 0.9,
                }}
            >
                {userMessage.toUpperCase()}
            </Typography>
        </Box>
    );
};

export default Message;
