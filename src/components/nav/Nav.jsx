import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";

import "./nav.css"

import NavMobile from "./NavMobile";

function Nav() {
    const [activeNav, setActiveNav] = useState("#")

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = document.querySelectorAll("section");
            let activeSession = null; //

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    activeSession = section.id;
                }
            });

            if (activeSession) {
                setActiveNav("#" + activeSession);
            } else if (scrollPosition === 0) {
                setActiveNav("#");
            }
        };

        window.scrollTo(0, 0)
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div>
            <nav className="nav__glass__main">
                <ul>
                    <li><NavLink to="/blogs" className="nav__blogs"><span>Blog</span></NavLink></li>
                    <div id="nav__ender"></div>
                </ul>
                <ul>
                    <li className="nav__link"><a href="#" onClick={() => setActiveNav("#")}
                           className={activeNav === "#" || activeNav === "#blogcards" ? "active" : ""}>Hjem</a></li>
                    <li className="nav__link"><a href="#about" onClick={() => setActiveNav("#about")}
                           className={activeNav === "#about" ? "active" : ""}>Om mig</a></li>
                    <li className="nav__link"><a href="#experience" onClick={() => setActiveNav("#experience")}
                           className={activeNav === "#experience" ? "active" : ""}>Erfaring</a></li>
                    <li className="nav__link"><a href="#projects" onClick={() => setActiveNav("#projects")}
                           className={activeNav === "#projects" ? "active" : ""}>Projekter</a></li>
                    <li className="nav__link"><a href="#contact" onClick={() => setActiveNav("#contact")}
                           className={activeNav === "#contact" ? "active" : ""}>Kontakt</a></li>
                    <div id="nav__ender"></div>
                </ul>
            </nav>
            <NavMobile/>
        </div>

    );
}

export default Nav;
