import React, {useState, useEffect} from "react";
import "./header.css"

import HeaderSocials from "./HeaderSocials";
import CTA from "./CTA"
import {BsArrowDown} from "react-icons/bs";


function Header() {
    const [showAnimation, setShowAnimation] = useState(false)

    useEffect(() => {
        setShowAnimation(true)
    }, []);


    return (
        <header>
            <div className="container header__container">
                {/*<div className="header__text">*/}
                <div className={`header__text ${showAnimation ? "show" : ""}`}>
                    <h4 className="text-basic animate-slide-left">Halløjsa, navnet er</h4>
                    <h1 className="animate-slide-left-slow">
                        MARK <a href="https://github.com/Ch0min/" target="_blank"><i
                        className="chomin text-basic">"Chomin"</i></a> LUNDGAARD</h1>
                    <h5 id="css__text" className="text-basic animate-fade">
                        <a href="https://www.cphbusiness.dk/uddannelser/erhvervsakademiuddannelser/datamatiker?gad=1&gclid=Cj0KCQjwjryjBhD0ARIsAMLvnF-AviQGtmdC88ao8j-JRzVYG0ABYaB6bfPDUeUcnHv6A61H-9jTfwoaAvLvEALw_wcB"
                           target="_blank">
                            en Frisk Datamatiker Studerende</a></h5>
                    <CTA/>
                    <HeaderSocials/>
                </div>



                {/*3 cards that when you click on them, they will direct down to 3 banners*/}
                {/*    1. work, 2. education, 3. hobbies*/}
                <div className={`click__this ${showAnimation ? "show" : ""}`}>
                <p className="animate-fade" href="#contact"><BsArrowDown/></p>
                </div>
            </div>

        </header>
    );
}

export default Header;