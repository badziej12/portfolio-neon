import { useScreen } from "@/context/ScreenContext";
import Image from "next/image";
import exitBtnImg from "../../public/assets/images/exit/exit-icon.svg";
import { useLoading } from "@/context/LoadingContext";

export const ExitButton = () => {
    const {onScreenChange} = useScreen();
    const {pushRefToList, handleItemLoading} = useLoading();

    // return (
    //     <button ref={(el: HTMLButtonElement) => pushRefToList(el)} className="exit-button" type="button" onClick={() => onScreenChange("main-menu")}>
    //         <Image width={24} height={24} src={exitBtnImg} alt="Exit" priority={true} onLoadingComplete={handleItemLoading} />
    //     </button>
    // )   

    return (
        <button ref={(el: HTMLButtonElement) => pushRefToList(el)} className="exit-button" onClick={() => onScreenChange("main-menu")}>
            <Image width={20} height={31} src={exitBtnImg} alt="Exit" priority={true} onLoadingComplete={handleItemLoading} />
            <p>Wróć</p>
        </button>
    )
}