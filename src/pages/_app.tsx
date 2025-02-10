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
import type {AppProps} from "next/app";

export default function App({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />;
}
