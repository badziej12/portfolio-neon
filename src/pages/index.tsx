import Head from "next/head";
import {Gameboy} from "@/components/Gameboy";

export default function Home() {
    return (
        <>
            <Head>
                <title>Błażej Tondel | Front-End Developer</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <div className="main-wrapper">
                <Gameboy />
            </div>
        </>
    );
}
