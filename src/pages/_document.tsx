import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html style={{height: "100vh", backgroundColor: "#040404"}} lang="pl">
            <Head/>
            <body style={{display: "block"}}>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    );
}
