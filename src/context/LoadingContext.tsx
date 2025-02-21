import React, { createContext, useContext, useState, FC, useEffect, RefObject, useRef, useCallback } from "react";

type LoadingContextType = {
    progress: number;
    increaseProgress: (value: number) => void;
    resetProgress: () => void;
    isFirstLoad: boolean;
    isCompletedLoading: boolean;
    resetCompletedLoading: () => void;
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
    const [progress, setProgress] = useState(1);
    const [isCompletedLoading, setIsCompletedLoading] = useState(false);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const loadRefs = useRef<(HTMLDivElement | HTMLImageElement | HTMLButtonElement | null)[]>([]);
    

    const increaseProgress = useCallback((value: number) => {
        setProgress((prev) => prev + value);
    }, []);

    const resetProgress = () => setProgress(0);

    const resetCompletedLoading = () => setIsCompletedLoading(false);

    const increaseItemsToLoad = useCallback((value: number) => {
        setItemsToLoad((prev) => prev + value);
    }, []);

    const resetItemsToLoad = () => {
        setItemsToLoad(0);
    };

    const handleItemLoading = () => {
        increaseProgress(1);
    }

    const pushRefToList = (el: HTMLDivElement | HTMLImageElement | HTMLButtonElement) => {
        if (el && !loadRefs.current.includes(el)) {
            loadRefs.current.push(el);
        }
    }

    useEffect(() => {
        if (progress >= itemsToLoad && itemsToLoad > 0) {
            setTimeout(() => setIsCompletedLoading(true), 600);
        }
    }, [progress, itemsToLoad]);

    useEffect(() => {
        if (isCompletedLoading && isFirstLoad) {
            const timer = setTimeout(() => {
                setIsFirstLoad(false);
            }, 5000);

            return () => clearTimeout(timer);
        };
    }, [isCompletedLoading, isFirstLoad]); 

    return (
        <LoadingContext.Provider value={{ progress, increaseProgress, resetProgress, isFirstLoad, isCompletedLoading, resetCompletedLoading, loadRefs, itemsToLoad, increaseItemsToLoad, handleItemLoading, resetItemsToLoad, pushRefToList }}>
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