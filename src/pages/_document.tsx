import { Analytics } from "@vercel/analytics/next";
import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html style={{height: "100vh", backgroundColor: "#040404"}} lang="en">
            <Head/>
            <body style={{display: "block"}}>
                <Main/>
                <NextScript/>
                <Analytics />
            </body>
        </Html>
    );
}
