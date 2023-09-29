import * as React from "react";
import { DataContext } from "../../providers/DataProvider";
import { CustomButton } from "..";

const ToggleTimeFormat = () => {
    const { feature, setTwentyFourHoursFormat, twentyFourHoursFormat } =
        React.useContext(DataContext);

    const handleClick = () => {
        setTwentyFourHoursFormat(!twentyFourHoursFormat);
    };

    return (
        <CustomButton
            name={twentyFourHoursFormat ? "12 HR FORMAT" : "24 HR FORMAT"}
            onClick={handleClick}
            style={{ display: feature === "time" ? "block" : "none" }}
        />
    );
};

export default ToggleTimeFormat;
