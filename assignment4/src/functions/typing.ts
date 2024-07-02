import {useEffect, useState} from "react";

export function useTypingEffect(text: string, typingSpeed: number) {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let typingTimeout: number | undefined;

        function type() {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
                typingTimeout = setTimeout(type, typingSpeed);
            }
        }

        if (index < text.length) {
            typingTimeout = setTimeout(type, typingSpeed);
        }

        return () => clearTimeout(typingTimeout);
    }, [index, text, typingSpeed]);

    return displayedText;
}

export function useTypingEffectWithImages(
    text: string,
    typingSpeed: number,
    triggerIndex: number,
    onTrigger: () => void
) {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [scipIndex, setScipIndex] = useState(0);
    const [imagesInserted, setImagesInserted] = useState(false);

    useEffect(() => {
        let typingTimeout: number | undefined;

        function type() {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text[index]);
                if (text[index] === "\n") {
                    setScipIndex((prev) => prev + 1);
                }
                if (scipIndex === triggerIndex && !imagesInserted) {
                    onTrigger();
                    setImagesInserted(true);
                }
                setIndex((prev) => prev + 1);
                typingTimeout = window.setTimeout(type, typingSpeed);
            }
        }

        if (index < text.length) {
            typingTimeout = window.setTimeout(type, typingSpeed);
        }

        return () => clearTimeout(typingTimeout);
    }, [index, scipIndex, imagesInserted, text, typingSpeed, triggerIndex, onTrigger]);

    return displayedText;
}
