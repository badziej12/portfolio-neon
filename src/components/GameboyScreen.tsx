import { MainMenu } from "./MainMenu";
import { ScreenSwitcher } from "./ScreenSwitcher";
import { AboutSection } from "./AboutSection";
import { useFirstLoad } from "@/context/ScreenContext";

export const GameboyScreen = () => {

    return (
        <div className={"gameboy-screen"}>
            <div className="gameboy-screen__content">
                <ScreenSwitcher>
                    <MainMenu key={"main-menu"} />
                    <AboutSection key={"about"} />
                </ScreenSwitcher>                
            </div>
        </div> 
    );
}
