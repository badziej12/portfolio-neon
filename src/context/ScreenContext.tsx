import React, { createContext, useContext, useState, FC, useEffect } from "react";

type ScreenContextType = {
    currentScreen: string;
    onScreenChange: (screen: string) => void;
};

const ScreenContext = createContext<ScreenContextType | undefined>(undefined);

type ScreenProviderProps = {
    children: React.ReactNode;
}

export const ScreenProvider: FC<ScreenProviderProps> = ({ children }) => {
    const [currentScreen, setCurrentScreen] = useState<string>("main-menu");

    const onScreenChange = (screen: string) => {
        setCurrentScreen(screen);
    };

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