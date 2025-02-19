import React, { createContext, useContext, useState, FC, useEffect } from "react";

type LoadingContextType = {
    progress: number;
    increaseProgress: (value: number) => void;
    resetProgress: () => void;
    addBuffor: () => void;
    isFirstLoad: boolean;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

type LoadingProviderProps = {
    children: React.ReactNode;
}

export const LoadingProvider: FC<LoadingProviderProps> = ({ children }) => {
    const [itemsToLoad, setItemsToLoad] = useState<number>(0);
    const [progress, setProgress] = useState(0);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    

    const increaseProgress = (value: number) => {
        setProgress((prev) => Math.min(prev + value, 100));
    }

    const resetProgress = () => setProgress(0);

    const addBuffor = () => {
        setItemsToLoad((prev) => prev + 1);
    }

    useEffect(() => {
        console.log("Rzeczy do wyrenderowania", itemsToLoad);
    }, [itemsToLoad]);

    useEffect(() => {
        increaseProgress(10);
    }, []);

    useEffect(() => {
        console.log("Zmiana progressu", progress);
        if (progress === 100) {
            const timer = setInterval(() => {
                setIsFirstLoad(false);
            }, 5000);

            resetProgress();

            return () => clearInterval(timer);
        }
    }, [progress])

    return (
        <LoadingContext.Provider value={{ progress, increaseProgress, resetProgress, isFirstLoad, addBuffor }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
};