import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import { messageTextStyle } from "../constants/styles";

const Message = () => {
    const { message } = useContext(DataContext);

    return (
        <Box
            sx={{
                height: "70vh",
                width: "90vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography variant="h1" sx={messageTextStyle}>
                {message.message.toUpperCase()}
            </Typography>
        </Box>
    );
};

export default Message;
