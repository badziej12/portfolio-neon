import { FC } from "react";
import { ExitButton } from "./ExitButton";


type ConsoleScreenProps = {
    children: React.ReactNode;
}

export const ConsoleScreen: FC<ConsoleScreenProps> = ({ children }) => {

    return (
        <div className="console-screen">
            <span className="console-screen__corner console-screen__corner--left"></span>
            <span className="console-screen__corner console-screen__corner--up-right"></span>
            <span className="console-screen__corner console-screen__corner--down-right"></span>
            <div className="console-screen__container">
                <div className="console-screen__content">
                    {children}
                </div>
                <ExitButton />
            </div>
        </div>
    )
}