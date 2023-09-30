import React, { createContext, useState, ReactNode, useEffect } from "react";
import { getMilliseconds } from "../utils/getMilliseconds";

interface TimeItems {
    hours: number;
    minutes: number;
    seconds: number;
    totalMilliseconds: number;
}

interface MessageItems {
    message: string;
    tempMessage: string;
}

interface DataContextType {
    feature: string;
    setFeature: React.Dispatch<React.SetStateAction<string>>;
    showTimeUp: boolean;
    setShowTimeUp: React.Dispatch<React.SetStateAction<boolean>>;
    editMode: boolean;
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    twentyFourHoursFormat: boolean;
    setTwentyFourHoursFormat: React.Dispatch<React.SetStateAction<boolean>>;
    message: MessageItems;
    setMessage: React.Dispatch<React.SetStateAction<MessageItems>>;
    isVisible: boolean;
    timeItems: TimeItems;
    setTimeItems: React.Dispatch<React.SetStateAction<TimeItems>>;
}

const initialContext: DataContextType = {
    feature: "countdown",
    setFeature: () => {},
    showTimeUp: false,
    setShowTimeUp: () => {},
    editMode: false,
    setEditMode: () => {},
    isPlaying: false,
    setIsPlaying: () => {},
    isVisible: false,
    timeItems: { hours: 0, minutes: 0, seconds: 0, totalMilliseconds: 0 },
    message: { message: "", tempMessage: "" },
    setMessage: () => {},
    setTimeItems: () => {},
    twentyFourHoursFormat: true,
    setTwentyFourHoursFormat: () => {},
};

export const DataContext = createContext<DataContextType>(initialContext);

interface DataProviderProps {
    children: ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [feature, setFeature] = useState<string>("countdown");
    const [showTimeUp, setShowTimeUp] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [twentyFourHoursFormat, setTwentyFourHoursFormat] = useState(true);
    const [message, setMessage] = useState({
        message: "You have 5 more minutes!",
        tempMessage: "",
    });
    const [timeItems, setTimeItems] = useState<TimeItems>({
        hours: 0,
        minutes: 10,
        seconds: 0,
        totalMilliseconds: 600000,
    });

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleMouseMove = () => {
            setIsVisible(true);

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsVisible(false);
            }, 10000);
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (isPlaying && timeItems.totalMilliseconds > 0) {
            timeoutId = setTimeout(() => {
                setTimeItems((prevState) => ({
                    ...prevState,
                    totalMilliseconds: prevState.totalMilliseconds - 1000,
                }));
            }, 975);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [timeItems.totalMilliseconds, isPlaying, setTimeItems, timeItems]);

    if (timeItems.totalMilliseconds === 0) {
        setShowTimeUp(true);

        setIsPlaying(false);

        setTimeItems((prevState) => ({
            ...prevState,
            totalMilliseconds: getMilliseconds(timeItems),
        }));
    }

    return (
        <DataContext.Provider
            value={{
                feature,
                setFeature,
                showTimeUp,
                setShowTimeUp,
                editMode,
                setEditMode,
                isPlaying,
                setIsPlaying,
                timeItems,
                setTimeItems,
                message,
                setMessage,
                isVisible,
                twentyFourHoursFormat,
                setTwentyFourHoursFormat,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
