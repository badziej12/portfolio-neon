import { useScreen } from "@/context/ScreenContext";
import Image from "next/image";

export const ExitButton = () => {
    const {onScreenChange} = useScreen();
    const image = "/assets/images/cross.png";

    return (
        <button className="exit-button" type="button" onClick={() => onScreenChange("main-menu")}>
            <Image width={40} height={40} src={image} alt="Exit" />
        </button>
    )   
}