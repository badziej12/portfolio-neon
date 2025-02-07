import { FC } from "react";
import { ExitButton } from "./ExitButton";
import { useScreen } from "@/context/ScreenContext";


type ConsoleScreenProps = {
    children: React.ReactNode;
}

export const ConsoleScreen: FC<ConsoleScreenProps> = ({ children }) => {
    const { onScreenChange } = useScreen();

    return (
        <div className="console-screen">
            <span className="console-screen__corner console-screen__corner--left"></span>
            <span className="console-screen__corner console-screen__corner--up-right"></span>
            <span className="console-screen__corner console-screen__corner--down-right"></span>
            <div className="console-screen__content">
                {children}
                <ExitButton onScreenChange={() => onScreenChange('main-menu')} />
            </div>
        </div>
    )
}