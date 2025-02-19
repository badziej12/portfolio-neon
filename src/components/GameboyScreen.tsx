import { ScreenSwitcher } from "./ScreenSwitcher";
import { AboutSection } from "./AboutSection";
import { ConsoleScreen } from "./ConsoleScreen";
import { ContactForm } from "./ContactForm";
import { ProjectsSection } from "./ProjectsSection";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { MainMenu } from "./MainMenu";
import { useLoading } from "@/context/LoadingContext";

const LazyMainMenu = dynamic(() => import("./MainMenu").then(mod => mod.MainMenu), {
    ssr: false,
});

export const GameboyScreen = () => {
    const { increaseProgress } = useLoading();

    useEffect(() => {
        increaseProgress(10);
    }, [])

    return (
        <div className={"gameboy-screen"}>
            <div className="gameboy-screen__content">
                <ScreenSwitcher>
                    {/* <MainMenu key={"main-menu"} /> */}
                    <LazyMainMenu key={"main-menu"} />
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
