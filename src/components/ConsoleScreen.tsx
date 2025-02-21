import { FC } from "react";
import { ExitButton } from "./ExitButton";
import { useLoading } from "@/context/LoadingContext";
import cornerLeftImg from "../../public/assets/images/about/left-corner.png";
import cornerUpRight from "../../public/assets/images/about/up-right-corner.png";
import cornerDownRightImg from "../../public/assets/images/about/down-right-corner.png";
import Image from "next/image";


type ConsoleScreenProps = {
    children: React.ReactNode;
}

export const ConsoleScreen: FC<ConsoleScreenProps> = ({ children }) => {
    const { isCompletedLoading, handleItemLoading } = useLoading();

    

    return (
        <div style={{display: isCompletedLoading ? "flex" : "none"}} className="console-screen-wrapper">
            <ExitButton />
            <div className="console-screen">
                <Image className="console-screen__corner console-screen__corner--left" src={cornerLeftImg} width={147} height={122} alt={"Corner"} priority={true} onLoadingComplete={handleItemLoading} />
                <Image className="console-screen__corner console-screen__corner--up-right" src={cornerUpRight} width={95} height={125} alt={"Corner"} priority={true} onLoadingComplete={handleItemLoading} />
                <Image className="console-screen__corner console-screen__corner--down-right" src={cornerDownRightImg} width={172} height={112} alt={"Corner"} priority={true} onLoadingComplete={handleItemLoading} />
                <div className="console-screen__container">
                    <div className="console-screen__content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}