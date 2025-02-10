import { useScreen } from "@/context/ScreenContext";

export const ExitButton = () => {
    const {onScreenChange} = useScreen();
    const image = "/assets/images/cross.png";

    return (
        <button className="exit-button" type="button" onClick={() => onScreenChange("main-menu")}>
            <img src={image} alt="Exit" />
        </button>
    )   
}