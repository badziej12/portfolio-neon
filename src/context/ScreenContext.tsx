import React, { createContext, useContext, useState, FC, useEffect } from "react";
import { useLoading } from "./LoadingContext";

export type ScreenKeys = "main-menu" | "about" | "projects" | "contact";

type ScreenContextType = {
    currentScreen: ScreenKeys | string;
    onScreenChange: (screen: ScreenKeys) => void;
};

const ScreenContext = createContext<ScreenContextType | undefined>(undefined);

type ScreenProviderProps = {
    children: React.ReactNode;
}
    
export const ScreenProvider: FC<ScreenProviderProps> = ({ children }) => {
    const [currentScreen, setCurrentScreen] = useState<ScreenKeys>("main-menu");
    const { loadRefs, resetItemsToLoad, resetProgress, resetCompletedLoading, increaseItemsToLoad } = useLoading();

    const onScreenChange = (screen: ScreenKeys) => {
        loadRefs.current = [];
        resetProgress();
        resetItemsToLoad();
        resetCompletedLoading();
        setCurrentScreen(screen);
    };

    const loadableItems = {
        "main-menu": 3,
        "about": 2,
        "projects": 11,
        "contact": 2,
    }

    useEffect(() => {
        increaseItemsToLoad(loadableItems[currentScreen]);
    }, [currentScreen, increaseItemsToLoad])

    return (
        <ScreenContext.Provider value={{ currentScreen, onScreenChange }}>
            {children}
        </ScreenContext.Provider>
    );
};

export const useScreen = () => {
    const context = useContext(ScreenContext);
    if (!context) {
        throw new Error("useScreen must be used within a ScreenProvider");
    }
    return context;
};