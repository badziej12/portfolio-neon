import { useState } from "react";
import { MainMenu } from "./MainMenu";
import { ScreenSwitcher } from "./ScreenSwitcher";

export const GameboyScreen = () => {
    const [currentScreen, setCurrentScreen] = useState("main-menu");

    const handleScreenChange = (screen: string) => {
        setCurrentScreen(screen);
        console.log(screen);
    }

    return (
        <div className={"gameboy-screen"}>
            <div className="gameboy-screen__content">
                <ScreenSwitcher currentScreen={currentScreen} onScreenChange={handleScreenChange}>
                    <MainMenu key={"main-menu"} onScreenChange={handleScreenChange}/>
                    <MainMenu key={"about"} onScreenChange={handleScreenChange}/>
                </ScreenSwitcher>                
            </div>
        </div> 
    );
}
