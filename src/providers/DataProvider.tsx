import React, { createContext, useState, ReactNode, useEffect } from "react";

interface DataContextType {
    feature: string;
    setFeature: React.Dispatch<React.SetStateAction<string>>;
    showTimeUp: boolean;
    setShowTimeUp: React.Dispatch<React.SetStateAction<boolean>>;
    hours: number;
    setHours: React.Dispatch<React.SetStateAction<number>>;
    minutes: number;
    setMinutes: React.Dispatch<React.SetStateAction<number>>;
    seconds: number;
    setSeconds: React.Dispatch<React.SetStateAction<number>>;
    duration: number;
    setDuration: React.Dispatch<React.SetStateAction<number>>;
    editMode: boolean;
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    time: number;
    setTime: React.Dispatch<React.SetStateAction<number>>;
}

const initialContext: DataContextType = {
    feature: "countdown",
    setFeature: () => {},
    showTimeUp: false,
    setShowTimeUp: () => {},
    hours: 0,
    setHours: () => {},
    minutes: 0,
    setMinutes: () => {},
    seconds: 0,
    setSeconds: () => {},
    duration: 0,
    setDuration: () => {},
    editMode: false,
    setEditMode: () => {},
    isPlaying: false,
    setIsPlaying: () => {},
    time: 0,
    setTime: () => {},
};

export const DataContext = createContext<DataContextType>(initialContext);

interface DataProviderProps {
    children: ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [feature, setFeature] = useState<string>("countdown");
    const [showTimeUp, setShowTimeUp] = useState<boolean>(false);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(10);
    const [seconds, setSeconds] = useState<number>(0);
    const [duration, setDuration] = useState<number>(600000);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState<number>(duration);

    useEffect(() => {
        isPlaying &&
            time > 0 &&
            setTimeout(() => {
                setTime(time - 1000);
            }, 1000);

        if (time === 0) {
            setShowTimeUp(true);

            setIsPlaying(false);

            setTimeout(() => {
                setTime(duration);
            }, 1000);
        }
    }, [time, isPlaying, setShowTimeUp, duration]);

    return (
        <DataContext.Provider
            value={{
                feature,
                setFeature,
                showTimeUp,
                setShowTimeUp,
                hours,
                setHours,
                minutes,
                setMinutes,
                seconds,
                setSeconds,
                duration,
                setDuration,
                editMode,
                setEditMode,
                isPlaying,
                setIsPlaying,
                time,
                setTime,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
