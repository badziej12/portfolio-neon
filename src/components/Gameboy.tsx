import { useScreen } from "@/context/ScreenContext";
import { GameboyScreen } from "./GameboyScreen";
import Image from "next/image";
import gameboyScreenImg from "../../public/assets/images/gameboy/gameboy-screen.png";
import gameboyDeviceImg from "../../public/assets/images/gameboy/gameboy-device.png";

export const Gameboy = () => {
    const { currentScreen } = useScreen();

    return (
        <div className={"gameboy-component"}>
            <div className={"gameboy-component__device"}>
                <div className={`gameboy-component__background ${currentScreen !== 'main-menu' ? 'darken' : ''}`}></div>
                <div className="gameboy-component__gameboy-image-container">
                    <Image className="gameboy-component__gameboy-device-image" src={gameboyDeviceImg} alt="Gameboy device" width={3351} height={3351} />
                    <Image className="gameboy-component__gameboy-screen-image" src={gameboyScreenImg} alt="Gameboy screen" width={3351} height={3351} />
                </div>
            </div>
            <GameboyScreen />
        </div>
    );
}