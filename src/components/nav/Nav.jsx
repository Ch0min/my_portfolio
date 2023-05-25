import React, {useEffect} from "react";
import { useState } from "react";
import "./nav.css"

import NavMobile from "./NavMobile";

// import {AiOutlineHome} from "react-icons/ai"
// import {AiOutlineUser} from "react-icons/ai"
// import {BiBook} from "react-icons/bi"
// import {RiServiceLine} from "react-icons/ri"
// import {BiMessageSquareDetail} from "react-icons/bi"

function Nav() {
    const [activeNav, setActiveNav] = useState("#")

    useEffect(() => {
        window.location.hash = '#';
    }, []);

    return (
        <div>
        <nav className="nav__main">
            <a href="#" onClick={() => setActiveNav("#")}
               className={activeNav === "#" ? "active" : ""}>
                Hjem</a>
            <a href="#about" onClick={() => setActiveNav("#about")}
               className={activeNav === "#about" ? "active" : ""}>
                Om mig</a>
            <a href="#experience" onClick={() => setActiveNav("#experience")}
               className={activeNav === "#experience" ? "active" : ""}>
                Erfaringer</a>
            <a href="#skills" onClick={() => setActiveNav("#skills")}
               className={activeNav === "#skills" ? "active" : ""}>
                Skills</a>
            <a href="#projects" onClick={() => setActiveNav("#projects")}
               className={activeNav === "#projects" ? "active" : ""}>
                Projekter</a>
            <a href="#contact" onClick={() => setActiveNav("#contact")}
               className={activeNav === "#contact" ? "active" : ""}>
                Kontakt
            </a>

            {/*<a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a>*/}
            {/*<a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></a>*/}
            {/*<a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BiBook/></a>*/}
            {/*<a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><RiServiceLine/></a>*/}
            {/*<a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail/></a>*/}

            {/*{window.innerWidth <= 600 ? <NavMobile /> : "Contact"}*/}
        </nav>

            <NavMobile />
        </div>

    );
}

export default Nav;
