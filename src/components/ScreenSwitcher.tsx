import Image from "next/image"
import React, { FC } from "react";

type ScreenSwitcherProps = {
    currentScreen: string;
    onScreenChange: (screen: string) => void;
    children: React.ReactNode[];
}

type ChildProps = {
    onScreenChange: (screen: string) => void;
}

export const ScreenSwitcher: FC<ScreenSwitcherProps> = ({onScreenChange, currentScreen, children}) => {
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