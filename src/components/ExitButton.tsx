import { useScreen } from "@/context/ScreenContext";
import Image from "next/image";
import exitBtnImg from "../../public/assets/images/cross.png";

export const ExitButton = () => {
    const {onScreenChange} = useScreen();

    return (
        <button className="exit-button" type="button" onClick={() => onScreenChange("main-menu")}>
            <Image width={40} height={40} src={exitBtnImg} alt="Exit" />
        </button>
    )   
}