import * as React from "react";
import { DataContext } from "../../providers/DataProvider";
import CustomModifier from "../customized/CustomModifier";

const SetMessage = () => {
    const { feature, editMode, setEditMode, setMessage } =
        React.useContext(DataContext);

    const handleClick = () => {
        if (editMode) {
            setMessage((prevState) => ({
                ...prevState,
                message: prevState.tempMessage,
            }));
            setEditMode(!editMode);
        } else {
            setEditMode(!editMode);
        }
    };

    const handleClose = () => {
        setEditMode(!editMode);
    };

    return (
        <CustomModifier
            condition={editMode && feature === "message"}
            buttonName={editMode ? "Confirm" : "Set Message"}
            handleClose={handleClose}
            handleButtonClick={handleClick}
            style={{ display: feature === "message" ? "block" : "none" }}
        />
    );
};

export default SetMessage;
