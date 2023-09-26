import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const fieldStyle = {
    mx: 1,
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
    },
};

const TimeInput = () => {
    return (
        <Box component="form" noValidate autoComplete="off">
            <TextField
                id="hours"
                label="Hour(s)"
                variant="outlined"
                sx={fieldStyle}
            />
            <TextField
                id="minutes"
                label="Minute(s)"
                variant="outlined"
                sx={fieldStyle}
            />
            <TextField
                id="seconds"
                label="Seconds(s)"
                variant="outlined"
                sx={fieldStyle}
            />
        </Box>
    );
};

export default TimeInput;
