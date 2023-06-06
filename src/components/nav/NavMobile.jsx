import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";

import "./nav.css"

import {BsBook, BsPerson, BsClipboardCheck, BsCodeSlash, BsChatText} from "react-icons/bs";
import {AiOutlineHome} from "react-icons/ai"

function Nav() {
    const [activeNav, setActiveNav] = useState("#")

    useEffect(() => {
        window.location.hash = '#';
    }, []);

    // const handleClick = () => {
    //     setActiveNav(!activeNav)
    // }

    return (
        <nav className="nav__mobile">
            <ul>
                <li><NavLink to="/blogs" className="nav__blogs-mobile"><span><BsBook/></span></NavLink></li>
                <div id="nav__ender"></div>
            </ul>
            <ul>
                <li className="nav__link"><a href="#" onClick={() => setActiveNav("#")}
                                             className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a></li>
                <li className="nav__link"><a href="#about" onClick={() => setActiveNav("#about")}
                                             className={activeNav === "#about" ? "active" : ""}><BsPerson/></a></li>
                <li className="nav__link"><a href="#experience" onClick={() => setActiveNav("#experience")}
                                             className={activeNav === "#experience" ? "active" : ""}><BsCodeSlash/></a></li>
                <li className="nav__link"><a href="#projects" onClick={() => setActiveNav("#projects")}
                                             className={activeNav === "#projects" ? "active" : ""}><BsClipboardCheck/></a></li>
                <li className="nav__link"><a href="#contact" onClick={() => setActiveNav("#contact")}
                                             className={activeNav === "#contact" ? "active" : ""}><BsChatText/></a></li>
                <div id="nav__ender"></div>
            </ul>


            {/*<a href="#" onClick={() => setActiveNav("#")}*/}
            {/*   className={activeNav === "#" ? "active" : ""}>*/}
            {/*    <AiOutlineHome /></a>*/}
            {/*<a href="#about" onClick={() => setActiveNav("#about")}*/}
            {/*   className={activeNav === "#about" ? "active" : ""}>*/}
            {/*    <BsFilePerson /></a>*/}
            {/*<a href="#experience" onClick={() => setActiveNav("#experience")}*/}
            {/*   className={activeNav === "#experience" ? "active" : ""}>*/}
            {/*    <BiBook /></a>*/}
            {/*<a href="#skills" onClick={() => setActiveNav("#skills")}*/}
            {/*   className={activeNav === "#skills" ? "active" : ""}>*/}
            {/*    <RiContactsLine /></a>*/}
            {/*<a href="#projects" onClick={() => setActiveNav("#projects")}*/}
            {/*   className={activeNav === "#projects" ? "active" : ""}>*/}
            {/*    <AiOutlineFundProjectionScreen /></a>*/}
            {/*<a href="#contact" onClick={() => setActiveNav("#contact")}*/}
            {/*   className={activeNav === "#contact" ? "active" : ""}>*/}
            {/*    <BiMessageDetail />*/}
            {/*</a>*/}

            {/*{window.innerWidth <= 600 ? "Test" : "Contact"}*/}

        </nav>

    );
}

export default Nav;
