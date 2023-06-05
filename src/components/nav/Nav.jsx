import React, {useEffect} from "react";
import {useState} from "react";
import {NavLink} from "react-router-dom";

import "./nav.css"

import NavMobile from "./NavMobile";

function Nav() {
    const [activeNav, setActiveNav] = useState("#")

    // useEffect(() => {
    //     window.location.hash = "#";
    // }, []);


    // Slet kommentarer efter, du har forstået det 100%.
    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            const scrollPosition = window.scrollY; // Get the current scroll position
            const sections = document.querySelectorAll("section"); // Select all the sections on the page
            let activeSession = null; // Variable to store the active section ID

            // Loop through each section to determine the active section
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100; // Get the top offset of the section (adjust as needed)
                const sectionHeight = section.offsetHeight; // Get the height of the section

                // Check if the scroll position is within the boundaries of the section
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    activeSession = section.id; // Set the active section ID
                }
            });

            // Update the active navigation based on the active section
            if (activeSession) {
                setActiveNav("#" + activeSession); // Set the active navigation link
            } else if (scrollPosition === 0) {
                setActiveNav("#"); // If scrolled to the top of the page, set the home link as active
            }
        };

        window.scrollTo(0, 0)

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up function to remove the scroll event listener when the component unmounts
        // Used for clean up /unmount just in case.
        return () => {
            // clearTimeout(timeout)
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div>
            <nav className="nav__glass__main">
                <ul>
                    <li><NavLink to="/blogs" className="nav__blogs"><span>BLOG</span></NavLink></li>
                    <div id="nav__ender"></div>

                </ul>
                <ul>
                    <li><a href="#" onClick={() => setActiveNav("#")}
                           className={activeNav === "#" ? "active" : ""}>Hjem</a></li>
                    <li><a href="#about" onClick={() => setActiveNav("#about")}
                           className={activeNav === "#about" ? "active" : ""}>Om mig</a></li>
                    <li><a href="#experience" onClick={() => setActiveNav("#experience")}
                           className={activeNav === "#experience" ? "active" : ""}>Erfaring</a></li>
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
