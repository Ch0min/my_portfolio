import React, {useEffect} from "react";
import { useState } from "react";
import "./nav.css"

import {AiOutlineHome} from "react-icons/ai"
import {BsFilePerson} from "react-icons/bs"
import {BiBook} from "react-icons/bi"
import {RiContactsLine} from "react-icons/ri"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import {BiMessageDetail} from "react-icons/bi"

function Nav() {
    const [activeNav, setActiveNav] = useState("#")

    useEffect(() => {
        window.location.hash = '#';
    }, []);

    return (
        <nav className="nav__mobile">
            <a href="#" onClick={() => setActiveNav("#")}
               className={activeNav === "#" ? "active" : ""}>
                <AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav("#about")}
               className={activeNav === "#about" ? "active" : ""}>
                <BsFilePerson /></a>
            <a href="#experience" onClick={() => setActiveNav("#experience")}
               className={activeNav === "#experience" ? "active" : ""}>
                <BiBook /></a>
            <a href="#skills" onClick={() => setActiveNav("#skills")}
               className={activeNav === "#skills" ? "active" : ""}>
                <RiContactsLine /></a>
            <a href="#projects" onClick={() => setActiveNav("#projects")}
               className={activeNav === "#projects" ? "active" : ""}>
                <AiOutlineFundProjectionScreen /></a>
            <a href="#contact" onClick={() => setActiveNav("#contact")}
               className={activeNav === "#contact" ? "active" : ""}>
                <BiMessageDetail />
            </a>

            {/*{window.innerWidth <= 600 ? "Test" : "Contact"}*/}

        </nav>

    );
}

export default Nav;
