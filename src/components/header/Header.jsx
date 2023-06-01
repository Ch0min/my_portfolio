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
                    <h5 id="cs__student-text" className="text-basic animate-fade">
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


            {/*<div className="blogcards__container">*/}
            {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet aspernatur aut consequatur cum dolor, dolorum ex magni, nesciunt odio officia optio quasi quia tempora, voluptas. Asperiores aspernatur dolore eligendi esse exercitationem incidunt, odit unde. Et fugit illum voluptate! Animi, at blanditiis consectetur corporis cumque dolore dolorem ducimus eaque eius eveniet ex excepturi exercitationem hic iste, itaque iure laudantium magnam molestiae nam non officiis perspiciatis quae quia quidem quisquam repudiandae, rerum saepe ullam vel velit veritatis voluptas voluptate voluptates. Amet corporis cumque cupiditate deleniti distinctio est illum minus molestias, mollitia, odit placeat quos repellat repudiandae soluta ullam. Enim, odit, optio!</p>*/}
            {/*    /!* Other content within the container *!/*/}
            {/*</div>*/}

        </header>
    );
}

export default Header;


{/*<a href="https://github.com/Ch0min/" target="_blank"><i*/}
{/*    className="chomin text-basic">"Chomin"</i>*/}
{/*</a>*/}