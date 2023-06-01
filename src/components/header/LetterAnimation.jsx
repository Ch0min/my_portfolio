import React, {useEffect, useRef} from "react";

const LetterAnimation = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const text = textRef.current;
        const letters = text.textContent.split('');

        text.innerHTML = '';

        letters.forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.animationDelay = `${index * 100}ms`;
            text.appendChild(span);
        });
    }, []);

    return (
        <h1>
            <span ref={textRef} className="cartoonish-animation">
                {/*MARK <a href="https://github.com/Ch0min/" target="_blank"><h1 className="chomin">"Chomin"</h1></a> LUNDGAARD*/}
            </span>
        </h1>
    );
};

export default LetterAnimation;
