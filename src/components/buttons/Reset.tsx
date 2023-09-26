import React from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { IconButton } from "@mui/material";

const buttonStyle = { fontSize: 60, color: "white" };

const Reset = () => {
    const toggleReset = () => {};

    return (
        <IconButton onClick={toggleReset}>
            <RestartAltIcon sx={buttonStyle} />
        </IconButton>
    );
};

export default Reset;
