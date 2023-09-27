import React, { createContext, useState, ReactNode, useEffect } from "react";
import { getMilliseconds } from "../utils/getMilliseconds";

interface TimeItems {
    hours: number;
    minutes: number;
    seconds: number;
    totalMilliseconds: number;
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
    timeItems: { hours: 0, minutes: 0, seconds: 0, totalMilliseconds: 0 },
    setTimeItems: () => {},
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
    const [timeItems, setTimeItems] = useState<TimeItems>({
        hours: 0,
        minutes: 10,
        seconds: 0,
        totalMilliseconds: 600000,
    });

    useEffect(() => {
        isPlaying &&
            timeItems.totalMilliseconds > 0 &&
            setTimeout(() => {
                setTimeItems({
                    ...timeItems,
                    totalMilliseconds: timeItems.totalMilliseconds - 1000,
                });
            }, 1000);

        if (timeItems.totalMilliseconds === 0) {
            setShowTimeUp(true);

            setIsPlaying(false);

            setTimeout(() => {
                setTimeItems({
                    ...timeItems,
                    totalMilliseconds: getMilliseconds(timeItems),
                });
            }, 1000);
        }
    }, [timeItems.totalMilliseconds, isPlaying, setShowTimeUp, timeItems]);

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
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
