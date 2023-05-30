import React, {useEffect} from "react";
import {useState} from "react";
import "./nav.css"

import NavMobile from "./NavMobile";

function Nav() {
    const [activeNav, setActiveNav] = useState("#")
    // const [markerNav, setMarkerNav] = useState({})

    useEffect(() => {
        window.location.hash = '#';
    }, []);


    return (
        <div>
            <nav className="nav__glass__main">

                <ul>
                    <li><a href="#" onClick={() => setActiveNav("#")}
                           className={activeNav === "#" ? "active" : ""}>Hjem</a></li>
                    <li><a href="#about" onClick={() => setActiveNav("#about")}
                           className={activeNav === "#about" ? "active" : ""}>Om mig</a></li>
                    <li><a href="#experience" onClick={() => setActiveNav("#experience")}
                           className={activeNav === "#experience" ? "active" : ""}>Erfaringer</a></li>
                    <li><a href="#skills" onClick={() => setActiveNav("#skills")}
                           className={activeNav === "#skills" ? "active" : ""}>Skills</a></li>
                    <li><a href="#projects" onClick={() => setActiveNav("#projects")}
                           className={activeNav === "#projects" ? "active" : ""}>Projekter</a></li>
                    <li><a href="#contact" onClick={() => setActiveNav("#contact")}
                           className={activeNav === "#contact" ? "active" : ""}>Kontakt</a></li>
                    <div id="nav__ender"></div>
                </ul>
            </nav>
            <NavMobile/>
        </div>

    );
}

export default Nav;
