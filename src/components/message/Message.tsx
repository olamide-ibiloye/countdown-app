import { Box, Typography } from "@mui/material";
import React from "react";

const Message = () => {
    const userMessage = "This is a default message";

    return (
        <Box>
            <Typography
                variant="h1"
                sx={{
                    color: "white",
                    fontWeight: 900,
                    display: "flex",
                    flex: 1,
                    fontSize: 220,
                    textAlign: "center",
                    px: 5,
                    lineHeight: 0.9,
                }}
            >
                {userMessage.toUpperCase()}
            </Typography>
        </Box>
    );
};

export default Message;
