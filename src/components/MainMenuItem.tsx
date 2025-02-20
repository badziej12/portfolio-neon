import { useLoading } from "@/context/LoadingContext";
import { useScreen } from "@/context/ScreenContext";
import Image, { StaticImageData } from "next/image"
import { forwardRef } from "react";

type MainMenuItemProps = {
    title: string;
    image: StaticImageData;
    imageAlt: string;
    screenName: string;
}

export const MainMenuItem = forwardRef<HTMLDivElement, MainMenuItemProps>(({title, image, imageAlt, screenName}, ref) => {
    const { onScreenChange } = useScreen();
    const { handleItemLoading } = useLoading();
    
    return (
        <div ref={ref} className="main-menu-item" onClick={() => onScreenChange(screenName)}>
            <div className="main-menu-item__content">
                <Image src={image} alt={imageAlt} width={300} height={300} onLoadingComplete={handleItemLoading} />
                <h2>{title}</h2>
            </div>
        </div>
    )
});

MainMenuItem.displayName = "MainMenuItem";
