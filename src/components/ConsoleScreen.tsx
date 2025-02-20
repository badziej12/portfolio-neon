import { FC } from "react";
import { ExitButton } from "./ExitButton";
import { useLoading } from "@/context/LoadingContext";


type ConsoleScreenProps = {
    children: React.ReactNode;
}

export const ConsoleScreen: FC<ConsoleScreenProps> = ({ children }) => {
    const { isCompletedLoading } = useLoading();

    return (
        <div style={{display: isCompletedLoading ? "block" : "none"}} className="console-screen">
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