import { useScreen } from "@/context/ScreenContext";
import React, { FC } from "react";

type ScreenSwitcherProps = {
    children: React.ReactNode[];
}

type ChildProps = {
    onScreenChange: (screen: string) => void;
}

export const ScreenSwitcher: FC<ScreenSwitcherProps> = ({children}) => {
    const { currentScreen, onScreenChange } = useScreen();

    return (
        <div className="screen-switcher" style={{height: "100%"}}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement<ChildProps>(child) && child.key === currentScreen) {
                    return React.cloneElement(child, { onScreenChange });
                }
                return null;
            })}
        </div>
    )
}