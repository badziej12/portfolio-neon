import { useEffect, useState } from "react";
import { ExitButton } from "./ExitButton";
import { useScreen } from "@/context/ScreenContext";

export const AboutSection = () => {
    const fullText = "Jestem front-end developerem, świeżo po ponad rocznym stażu w Opera Software. \
                    Moja przygoda z programowaniem zaczęła się z własnej inicjatywy – choć podstawy zdobyłem na studiach (Teleinformatyka), \
                    to dopiero przy pracy nad inżynierskim projektem odkryłem swoją pasję do web developmentu. \
                    Tworzenie aplikacji webowych przyszło mi naturalnie, dlatego postanowiłem pogłębić wiedzę poprzez kursy i samodzielne projekty. \
                    Najwięcej doświadczenia zdobyłem podczas stażu, gdzie pracowałem nad realnymi zadaniami, rozwiązywałem problemy i poznałem profesjonalne workflow. \
                    Miałem okazję współpracować z różnymi działami, takimi jak design, backend i marketing, co nauczyło mnie efektywnej komunikacji i pracy zespołowej. \
                    Poza programowaniem pasjonuję się sportem i podróżami.";
    const [displayedText, setDisplatedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    const { onScreenChange } = useScreen();

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsTyping(true);
        }, 1000);

        return () => clearTimeout(delay);
    }, []);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (isTyping && index < fullText.length) {
            timeout = setTimeout(() => {
                setDisplatedText((prev) => prev + fullText[index]);
                setIndex((prev) => prev + 1);
            }, 10); 
        }

        return () => clearTimeout(timeout);
    }, [index, fullText, isTyping]);
    
    return (
        <div className="about-section">
            <span className="about-section__corner about-section__corner--left"></span>
            <span className="about-section__corner about-section__corner--up-right"></span>
            <span className="about-section__corner about-section__corner--down-right"></span>
            <div className="about-section__content">
                <p>
                    {displayedText}
                </p>
                <ExitButton onScreenChange={() => onScreenChange('main-menu')} />
            </div>
        </div>
    )
}