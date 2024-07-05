import { useEffect, useState } from 'react';

export function useTypingEffect(text: string, typingSpeed: number) {
  const [displayedText, setDisplayedText] = useState('');
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
  triggerIndex: number
) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [scipIndex, setScipIndex] = useState(0);
  const [imagesVisible, setImagesVisible] = useState(false);

  useEffect(() => {
    let typingTimeout: number | undefined;

    function type() {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        if (text[index] === '\n') {
          setScipIndex((prev) => prev + 1);
        }
        if (scipIndex === triggerIndex && !imagesVisible) {
          setImagesVisible(true);
        }
        setIndex((prev) => prev + 1);
        typingTimeout = window.setTimeout(type, typingSpeed);
      }
    }

    typingTimeout = window.setTimeout(type, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [index, scipIndex, imagesVisible, text, typingSpeed, triggerIndex]);

  return { displayedText, imagesVisible };
}
