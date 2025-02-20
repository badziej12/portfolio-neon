import "@/styles/globals.css";
import "@/styles/main.scss";
import "@/styles/component/gameboy-component.scss";
import "@/styles/component/gameboy-screen.scss";
import "@/styles/component/main-menu.scss";
import "@/styles/component/main-menu-item.scss";
import "@/styles/component/about-section.scss";
import "@/styles/component/exit-button.scss";
import "@/styles/component/console-screen.scss";
import "@/styles/component/contact-form.scss";
import "@/styles/component/projects-section.scss";
import "@/styles/component/projects-section-item.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type {AppProps} from "next/app";
import { LoadingProvider, useLoading } from "@/context/LoadingContext";
import { ScreenProvider } from "@/context/ScreenContext";
import { useEffect, useState } from "react";

const Loader = () => {
    const { progress, itemsToLoad, isCompletedLoading } = useLoading();
    const [ barWidth, setBarWidth ] = useState(0);

    useEffect(() => {
        if (progress * 100 / itemsToLoad >= barWidth) {
            setBarWidth(progress * 100 / itemsToLoad );
        }

        if (progress === 0) {
            setBarWidth(0);
        }
    }, [progress, itemsToLoad, barWidth])
  
    return (
      <div className="loader"
            style={{
                    position: "absolute",
                    display: isCompletedLoading ? "none" : "block",
                    top: "50%",
                    left: "50%",
                    padding: "8px",
                    border: "3px solid #00FFFF",
                    transform: "translate(-50%, -50%)",
                    height: "50px",
                    width: "300px",
                    backgroundColor: "#00FFFF30",
                }}>
        <div style={{
            position: "relative",
            height: "100%",
        }}
            className="loader-content"
        >
            <div className="loading-bar" style={{ width: `${barWidth}%`, height: "100%" }} > 
                <div className="loading-cover">
                    <div className="loading-element"></div>
                    <div className="loading-element"></div>
                    <div className="loading-element"></div>
                    <div className="loading-element"></div>
                    <div className="loading-element"></div>
                    <div className="loading-element"></div>
                    <div className="loading-element"></div>
                    <div className="loading-element"></div>
                    <div className="loading-element"></div>
                    <div className="loading-element"></div>
                </div>    
            </div>
        </div>
      </div>
    );
};

export default function App({Component, pageProps}: AppProps) { 
    return (
        <LoadingProvider>
            <ScreenProvider>
                <Loader />
                <Component {...pageProps} />
            </ScreenProvider>
        </LoadingProvider>
    );
}
