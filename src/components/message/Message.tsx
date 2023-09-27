import { Box, Typography } from "@mui/material";
import React from "react";
import { messageTextStyle } from "../constants/styles";

const Message = () => {
    const userMessage = "You have 5 more minutes!";

    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography variant="h1" sx={messageTextStyle}>
                {userMessage.toUpperCase()}
            </Typography>
        </Box>
    );
};

export default Message;
