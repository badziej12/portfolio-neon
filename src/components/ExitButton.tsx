import { useScreen } from "@/context/ScreenContext";
import Image from "next/image";
import exitBtnImg from "../../public/assets/images/cross.png";
import { useLoading } from "@/context/LoadingContext";

export const ExitButton = () => {
    const {onScreenChange} = useScreen();
    const {pushRefToList, handleItemLoading} = useLoading();

    return (
        <button ref={(el: HTMLButtonElement) => pushRefToList(el)} className="exit-button" type="button" onClick={() => onScreenChange("main-menu")}>
            <Image width={40} height={40} src={exitBtnImg} alt="Exit" priority={true} onLoadingComplete={handleItemLoading} />
        </button>
    )   
}