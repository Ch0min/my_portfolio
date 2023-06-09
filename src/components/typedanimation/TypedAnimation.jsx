import React, {useState, useEffect} from "react";
import "./typedanimation.css"

function TypedAnimation() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentCharIndex, setCurrentCharIndex] = useState(0)
    const [typedText, setTypedText] = useState("")
    const words = ["Chomin", "Datamatiker", "Beerpong Konge", "Deltids Bowler", "Armwrestler i byen", "Selvlært Pianist"]

    useEffect(() => {
        const typingTimer = setTimeout(() => {
            if (currentCharIndex < words[currentWordIndex].length) {
                setTypedText((prevTypedText) => prevTypedText + words[currentWordIndex][currentCharIndex])
                setCurrentCharIndex((prevCharIndex) => prevCharIndex + 1)
            } else {
                setCurrentCharIndex(0)
                // setCurrentWordIndex((prevWordIndex) => (prevWordIndex + 1) % words.length)
                setCurrentWordIndex((prevWordIndex) => {
                    const newIndex = prevWordIndex + 1
                    return newIndex < words.length ? newIndex : 0
                })
                setTypedText("")
            }
        }, 150)
        return () => clearTimeout(typingTimer)
    }, [currentCharIndex, currentWordIndex])


    return (
        <span>{typedText}<span className="blinking__line">|</span></span>
    );
}

export default TypedAnimation;
