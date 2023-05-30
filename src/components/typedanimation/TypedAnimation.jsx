import React, { useEffect, useState } from "react";
import "./typedanimation.css"

const TypedAnimation = () => {
    const words = ["Mark Lundgaard", "Datamatiker", "Beerpong Konge"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        const typingTimer = setTimeout(() => {
            if (currentCharIndex < words[currentWordIndex].length) {
                setTypedText((prevTypedText) => prevTypedText + words[currentWordIndex][currentCharIndex]);
                setCurrentCharIndex((prevCharIndex) => prevCharIndex + 1);
            } else {
                setCurrentCharIndex(0);
                setCurrentWordIndex((prevWordIndex) => (prevWordIndex + 1) % words.length);
                setTypedText('');
            }
        }, 200); // Adjust typing speed here (in milliseconds)

        return () => clearTimeout(typingTimer);
    }, [currentCharIndex, currentWordIndex]);

    return (
        <span>{typedText}<span className="blink-caret">|</span></span>
    );
};

export default TypedAnimation;
