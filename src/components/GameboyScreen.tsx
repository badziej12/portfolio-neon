import { MainMenu } from "./MainMenu";
import { ScreenSwitcher } from "./ScreenSwitcher";
import { AboutSection } from "./AboutSection";
import { ConsoleScreen } from "./ConsoleScreen";
import { ContactForm } from "./ContactForm";
import { ProjectsSection } from "./ProjectsSection";

export const GameboyScreen = () => {

    return (
        <div className={"gameboy-screen"}>
            <div className="gameboy-screen__content">
                <ScreenSwitcher>
                    <MainMenu key={"main-menu"} />
                    <ConsoleScreen key={"about"}>
                        <AboutSection />
                    </ConsoleScreen>
                    <ConsoleScreen key={"contact"}>
                        <ContactForm />
                    </ConsoleScreen>
                    <ProjectsSection key={"projects"} />
                </ScreenSwitcher>                
            </div>
        </div> 
    );
}
