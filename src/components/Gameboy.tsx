import { useScreen } from "@/context/ScreenContext";
import { GameboyScreen } from "./GameboyScreen";
import Image from "next/image";

export const Gameboy = () => {
    const { currentScreen } = useScreen();

    return (
        <div className={"gameboy-component"}>
            <div className={"gameboy-component__device"}>
                <div className={`gameboy-component__background ${currentScreen !== 'main-menu' ? 'darken' : ''}`}></div>
                <div className="gameboy-component__gameboy-image-container">
                    <Image className="gameboy-component__gameboy-device-image" src={"/portfolio-neon/assets/images/gameboy/gameboy-device.png"} alt="Gameboy device" width={3351} height={3351} />
                    <Image className="gameboy-component__gameboy-screen-image" src={"/portfolio-neon/assets/images/gameboy/gameboy-screen.png"} alt="Gameboy screen" width={3351} height={3351} />
                </div>
            </div>
            <GameboyScreen />
        </div>
    );
}