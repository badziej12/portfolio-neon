import Head from "next/head";
import dynamic from "next/dynamic";
import gameboyScreenImg from "../../public/assets/images/gameboy/gameboy-screen.png";
import gameboyDeviceImg from "../../public/assets/images/gameboy/gameboy-device.png";
import { useLoading } from "@/context/LoadingContext";
import { useEffect } from "react";

const LazyGameboy = dynamic(() => import("../components/Gameboy").then(mod => mod.Gameboy), {
    ssr: false,
});

export default function Home() {
    const {increaseProgress} = useLoading();

    useEffect(() => {
        increaseProgress(1);
    }, [increaseProgress]);

    return (
        <>
            <Head>
                <title>Błażej Tondel | Front-End Developer</title>
                <meta name="description" content="Passionate front-end developer with experience in Django, React, Next.js and modern web technologies. Explore my portfolio to see my latest projects and skills in web development."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="preload" href={gameboyDeviceImg.src} as="image" />
                <link rel="preload" href={gameboyScreenImg.src} as="image" />
                <link rel="preload" href={"styles/loader.css"} as="style" />
                <link rel="stylesheet" href="styles/loader.css" />
                <link rel="icon" href="favicon.ico" />
            </Head>
            <div className="main-wrapper">
                <LazyGameboy />
            </div>
        </>
    );
}
