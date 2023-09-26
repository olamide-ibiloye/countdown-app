import React, { createContext, useState, ReactNode } from "react";

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
};

export const DataContext = createContext<DataContextType>(initialContext);

interface DataProviderProps {
    children: ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [feature, setFeature] = useState<string>("countdown");
    const [showTimeUp, setShowTimeUp] = useState<boolean>(false);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [duration, setDuration] = useState<number>(30000);
    const [editMode, setEditMode] = useState<boolean>(false);

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
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
