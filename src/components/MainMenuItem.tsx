import { useScreen } from "@/context/ScreenContext";
import Image from "next/image"
import { FC } from "react";

type MainMenuItemProps = {
    title: string;
    image: string;
    imageAlt: string;
    screenName: string;
}

export const MainMenuItem:FC<MainMenuItemProps> = ({title, image, imageAlt, screenName}) => {
    const { onScreenChange } = useScreen();
    
    return (
        <div className="main-menu-item" onClick={() => onScreenChange(screenName)}>
            <div className="main-menu-item__content">
                <Image src={image} alt={imageAlt} width={300} height={300} />
                <h2>{title}</h2>
            </div>
        </div>
    )
}