import { useScreen } from "@/context/ScreenContext";
import Image from "next/image";
import gameboyScreenImg from "../../public/assets/images/gameboy/gameboy-screen.png";
import gameboyDeviceImg from "../../public/assets/images/gameboy/gameboy-device.png";
import { useEffect, useState } from "react";
import { useLoading } from "@/context/LoadingContext";
import dynamic from "next/dynamic";

const LazyGameboyScreen = dynamic(() => import("../components/GameboyScreen").then(mod => mod.GameboyScreen), {
    ssr: false,
    loading: () => {
        const { addBuffor } = useLoading();
        
        useEffect(() => {
            addBuffor();
        }, []);

        return null;
    },
});

export const Gameboy = () => {
    const { currentScreen } = useScreen();
    const [imagesRendered, setImagesRendered] = useState(false);
    const { progress, increaseProgress, addBuffor } = useLoading();
    const [ isLoaded, setIsLoaded ] = useState(false);
     
    useEffect(() => {
        increaseProgress(10);
    }, [])

    useEffect(() => {
        if (progress === 100) {
            setIsLoaded(true);
        }
    }, [progress])

    const handleLoadingImage = () => {
        setImagesRendered(true);
        increaseProgress(10);
    }

    const handleLoadingStart = () => {
        addBuffor();
    }

    return (
        <div className={`gameboy-component ${isLoaded ? 'loaded' : ''}`}>
            <div className={"gameboy-component__device"}>
                <div className={`gameboy-component__background ${currentScreen !== 'main-menu' ? 'darken' : ''}`}></div>
                <div className="gameboy-component__gameboy-image-container">
                    <Image className={`gameboy-component__gameboy-device-image ${imagesRendered ? "loaded": "" }`} src={gameboyDeviceImg} alt="Gameboy device" width={3351} height={3351} priority={true} onLoad={handleLoadingStart} onLoadingComplete={handleLoadingImage} />
                    <Image className={`gameboy-component__gameboy-screen-image ${imagesRendered ? "loaded": "" }`} src={gameboyScreenImg} alt="Gameboy screen" width={3351} height={3351} priority={true} onLoad={handleLoadingStart} onLoadingComplete={handleLoadingImage} />
                </div>
            </div>
            <LazyGameboyScreen />
        </div>
    );
}