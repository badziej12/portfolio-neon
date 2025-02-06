import "@/styles/globals.css";
import "@/styles/main.scss";
import "@/styles/component/gameboy-component.scss";
import "@/styles/component/gameboy-screen.scss";
import "@/styles/component/main-menu.scss";
import "@/styles/component/main-menu-item.scss";
import "@/styles/component/about-section.scss";
import "@/styles/component/exit-button.scss";
import type {AppProps} from "next/app";

export default function App({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />;
}
