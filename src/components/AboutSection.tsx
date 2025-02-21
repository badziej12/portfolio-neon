import { useEffect, useState } from "react";

export const AboutSection = () => {
    const fullText = "I'm a front-end developer, recently completing a year-long internship at Opera Software. \
                        My journey with programming started on my own initiative—although I learned the basics during my studies (Teleinformatics), \
                        it was while working on my engineering project that I discovered my passion for web development. \
                        Building web applications came naturally to me, so I decided to deepen my knowledge through courses and personal projects. \
                        I gained the most experience during my internship, where I worked on real tasks, solved problems, and learned professional workflows. \
                        I had the opportunity to collaborate with various departments, such as design, backend, and marketing, which taught me effective communication and teamwork. \
                        Outside of programming, I'm passionate about sports and traveling.";
    const [displayedText, setDisplatedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

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
            <p>
                {displayedText}
            </p>
        </div>
    )
}