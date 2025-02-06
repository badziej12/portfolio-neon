import React, { createContext, useContext, useState, FC, useEffect } from "react";

type ScreenContextType = {
    currentScreen: string;
    onScreenChange: (screen: string) => void;
    isFirstLoad: boolean;
};

const ScreenContext = createContext<ScreenContextType | undefined>(undefined);

type ScreenProviderProps = {
    children: React.ReactNode;
}

export const ScreenProvider: FC<ScreenProviderProps> = ({ children }) => {
    const [currentScreen, setCurrentScreen] = useState<string>("main-menu");
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    const onScreenChange = (screen: string) => {
        setCurrentScreen(screen);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setIsFirstLoad(false);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <ScreenContext.Provider value={{ currentScreen, onScreenChange, isFirstLoad }}>
            {children}
        </ScreenContext.Provider>
    );
};

export const useFirstLoad = () => {
    const context = useContext(ScreenContext);
    if (!context) {
        throw new Error("useFirstLoad must be used within a ScreenProvider");
    }
    return context;
}

export const useScreen = () => {
    const context = useContext(ScreenContext);
    if (!context) {
        throw new Error("useScreen must be used within a ScreenProvider");
    }
    return context;
};