import { FC } from "react";

type ExitButtonProps = {
    onScreenChange: (screen: string) => void;
}

export const ExitButton:FC<ExitButtonProps> = ({onScreenChange}) => {
    const image = "/assets/images/cross.png";

    return (
        <button className="exit-button" type="button" onClick={() => onScreenChange("main-menu")}>
            <img src={image} alt="Exit" />
        </button>
    )   
}