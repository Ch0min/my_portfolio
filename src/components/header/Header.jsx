import React, {useState, useEffect} from "react";
import "./header.css"

import HeaderSocials from "./HeaderSocials";
import CTA from "./CTA"

import {FiChevronsDown} from "react-icons/fi";


function Header() {
    const [showAnimation, setShowAnimation] = useState(false)
    const [showBorderAnimation, setShowBorderAnimation] = useState(false)

    useEffect(() => {
        setShowAnimation(true)
    }, []);

    const handleTransitionEnd = () => {
        setShowBorderAnimation(true)
    }

    return (
        <header>
            <div className="container header__container">
                <div className={`header__text ${showAnimation ? "show" : ""}`}>
                    <h4 className="text-basic animate-slide-left">Halløjsa, mit navn er</h4>
                    <h1 className={`animate-slide-left-slow ${showBorderAnimation ? "border-text-animation" :  ""}`} onTransitionEnd={handleTransitionEnd}>
                        Mark{" "}
                        <div id="header__tooltip">
                            <span id="header__tooltip__text">Klik for historien bag mit kaldenavn</span>
                            <a href="" id="header__chomin">Chomin</a>
                        </div>
                        {" "}Lundgaard
                    </h1>
                    <h5 id="cs__student-text" className="text-basic animate-fade-slow">
                        <span className="cs__student-text-hover">
                        <a href=""
                           target="_blank">
                            en Frisk Datamatiker Studerende</a></span></h5>
                    <CTA/>
                    <HeaderSocials/>
                </div>
                <div className={`click__this ${showAnimation ? "show" : ""}`}>
                    <p className="animate-slide-down"><FiChevronsDown/></p>
                </div>
            </div>
        </header>
    );
}

export default Header;
