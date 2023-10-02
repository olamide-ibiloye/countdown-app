import React, { createContext, useState, ReactNode, useEffect } from "react";
import { getMilliseconds } from "../utils/functions";

const DEFAULT_TIME = {
    HOURS: 0,
    MINUTES: 10,
    SECONDS: 0,
    MILLISECONDS: 600_000,
};
const TIME_OUT = 10_000;
const ONE_SECOND = 1_000;

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

export const DataContext = createContext(initialContext);

interface DataProviderProps {
    children: ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [feature, setFeature] = useState("countdown");
    const [showTimeUp, setShowTimeUp] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [twentyFourHoursFormat, setTwentyFourHoursFormat] = useState(true);
    const [message, setMessage] = useState({
        message: "You have 5 more minutes!",
        tempMessage: "",
    });
    const [timeItems, setTimeItems] = useState({
        hours: DEFAULT_TIME.HOURS,
        minutes: DEFAULT_TIME.MINUTES,
        seconds: DEFAULT_TIME.SECONDS,
        totalMilliseconds: DEFAULT_TIME.MILLISECONDS,
    });

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleMouseMove = () => {
            setIsVisible(true);

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsVisible(false);
            }, TIME_OUT);
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
                    totalMilliseconds: prevState.totalMilliseconds - ONE_SECOND,
                }));
            }, 975);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isPlaying, timeItems]);

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
