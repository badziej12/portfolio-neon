import React, { createContext, useContext, useState, FC, useEffect, RefObject, useRef } from "react";

type LoadingContextType = {
    progress: number;
    increaseProgress: (value: number) => void;
    resetProgress: () => void;
    isFirstLoad: boolean;
    isCompletedLoading: boolean;
    itemsToLoad: number;
    increaseItemsToLoad: (value: number) => void;
    handleItemLoading: () => void;
    resetItemsToLoad: () => void;
    loadRefs: RefObject<(HTMLDivElement | HTMLImageElement | HTMLButtonElement | null)[]>;
    pushRefToList: (el: HTMLDivElement | HTMLImageElement | HTMLButtonElement) => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

type LoadingProviderProps = {
    children: React.ReactNode;
}

export const LoadingProvider: FC<LoadingProviderProps> = ({ children }) => {
    const [itemsToLoad, setItemsToLoad] = useState<number>(6);
    const [progress, setProgress] = useState(0);
    const [isCompletedLoading, setIsCompletedLoading] = useState(false);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const loadRefs = useRef<(HTMLDivElement | HTMLImageElement | HTMLButtonElement | null)[]>([]);
    

    const increaseProgress = (value: number) => {
        setProgress((prev) => prev + value);
    }

    const resetProgress = () => setProgress(0);

    const increaseItemsToLoad = (value: number) => {
        setItemsToLoad((prev) => prev + value);
    }

    const resetItemsToLoad = () => {
        setItemsToLoad(1);
    }

    const handleItemLoading = () => {
        increaseProgress(1);
    }

    const pushRefToList = (el: HTMLDivElement | HTMLImageElement | HTMLButtonElement) => {
        if (el && !loadRefs.current.includes(el)) {
            loadRefs.current.push(el);
        }
    }

    useEffect(() => {
        console.log("Rzeczy do wyrenderowania", itemsToLoad);
    }, [itemsToLoad]);

    useEffect(() => {
        increaseProgress(1);
    }, []);

    useEffect(() => {
        console.log("Zmiana progressu", progress);

        if (progress >= itemsToLoad) {
            const timer = setInterval(() => {
                setIsCompletedLoading(true);
            }, 600);

            return () => clearInterval(timer);
        } else {
            setIsCompletedLoading(false);
        }
    }, [progress, itemsToLoad]);

    useEffect(() => {
        if (isCompletedLoading && isFirstLoad) {
            const timer = setInterval(() => {
                setIsFirstLoad(false);
            }, 5000);

            return () => clearInterval(timer);
        };
    }, [isCompletedLoading]);

    return (
        <LoadingContext.Provider value={{ progress, increaseProgress, resetProgress, isFirstLoad, isCompletedLoading, loadRefs, itemsToLoad, increaseItemsToLoad, handleItemLoading, resetItemsToLoad, pushRefToList }}>
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