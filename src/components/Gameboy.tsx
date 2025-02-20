import { useScreen } from "@/context/ScreenContext";
import Image from "next/image";
import gameboyScreenImg from "../../public/assets/images/gameboy/gameboy-screen.png";
import gameboyDeviceImg from "../../public/assets/images/gameboy/gameboy-device.png";
import { useEffect, useRef, useState } from "react";
import { useLoading } from "@/context/LoadingContext";
import dynamic from "next/dynamic";

const LazyGameboyScreen = dynamic(() => import("../components/GameboyScreen").then(mod => mod.GameboyScreen), {
    ssr: false,
});

export const Gameboy = () => {
    const { currentScreen } = useScreen();
    const { increaseProgress, isCompletedLoading } = useLoading();
    const [ isLoaded, setIsLoaded ] = useState(false);
     
    useEffect(() => {
        increaseProgress(1);
    }, []);

    useEffect(() => {
        isCompletedLoading && setIsLoaded(true);
    }, [isCompletedLoading])

    const handleLoadingImage = () => {
        increaseProgress(1);
    }

    return (
        <div className={`gameboy-component ${isLoaded ? 'loaded' : ''}`}>
            <div className={"gameboy-component__device"}>
                <div className={`gameboy-component__background ${currentScreen !== 'main-menu' ? 'darken' : ''}`}></div>
                <div className="gameboy-component__gameboy-image-container">
                    <Image className={`gameboy-component__gameboy-device-image`} 
                        src={gameboyDeviceImg} 
                        alt="Gameboy device" 
                        width={3351} 
                        height={3351} 
                        priority={true} 
                        onLoadingComplete={handleLoadingImage} />
                    <Image className={`gameboy-component__gameboy-screen-image`} 
                        src={gameboyScreenImg} alt="Gameboy screen" 
                        width={3351} 
                        height={3351} 
                        priority={true} 
                        onLoadingComplete={handleLoadingImage} />
                </div>
            </div>
            <LazyGameboyScreen />
        </div>
    );
}