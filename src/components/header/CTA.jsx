import React from "react";
import CV from "../../assets/mit_CV.pdf"

function CTA() {
    return (
        <div className="cta">
            <a href="#contact" id="talk__btn" className="btn btn-primary animate-slide-up">Lad os snakke</a>
            <p className="animate-slide-up-mid">ELLER</p>
            <a href={CV} download id="cv__btn" className="btn animate-slide-up-slow">Klik her for at hente mit CV</a>
        </div>
    );
}

export default CTA;