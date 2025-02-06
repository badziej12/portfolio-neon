import { MainMenu } from "./MainMenu";
import { ScreenSwitcher } from "./ScreenSwitcher";
import { AboutSection } from "./AboutSection";

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
