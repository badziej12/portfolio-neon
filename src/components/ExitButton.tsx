import { useScreen } from "@/context/ScreenContext";
import Image from "next/image";
import exitBtnImg from "../../public/assets/images/exit/exit-icon.svg";
import exitBoxImg from "../../public/assets/images/exit/exit-box.svg";
import { useLoading } from "@/context/LoadingContext";

export const ExitButton = () => {
    const {onScreenChange} = useScreen();
    const { handleItemLoading } = useLoading();

    return (
        <button className="exit-button" onClick={() => onScreenChange("main-menu")}>
            <Image fill src={exitBoxImg} alt="Exit box" priority={true} onLoadingComplete={handleItemLoading} />
            <Image width={20} height={31} src={exitBtnImg} alt="Exit" priority={true} onLoadingComplete={handleItemLoading} />
            <p>Back</p>
        </button>
    )
}