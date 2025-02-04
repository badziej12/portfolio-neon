import "@/styles/globals.css";
import "@/styles/main.scss";
import "@/styles/component/gameboy-component.scss";
import type {AppProps} from "next/app";

export default function App({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />;
}
