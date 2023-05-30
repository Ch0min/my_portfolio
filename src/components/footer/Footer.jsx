import React from "react";
import "./footer.css"
import {BsFacebook, BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";

function Footer() {
    return (
        <footer>
            <div className="footer__waves">
                <div className="footer__wave" id="footer__wave1"></div>
                <div className="footer__wave" id="footer__wave2"></div>
                <div className="footer__wave" id="footer__wave3"></div>
                <div className="footer__wave" id="footer__wave4"></div>
            </div>
            {/*END OF WAVES*/}


            <ul className="footer__socials-list">
                <li><a href="https://github.com/Ch0min" target="_blank"><BsGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/mark-lundgaard-543796258/"
                       target="_blank"><BsLinkedin/></a></li>
                <li><a href="https://www.facebook.com/MarkLundgaard/" target="_blank"><BsFacebook/></a></li>
                <li><a href="https://www.instagram.com/markchomin/" target="_blank"><BsInstagram/></a></li>
            </ul>
            <ul className="footer__menu-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Om mig</a></li>
                <li><a href="#">Erfaringer</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projekter</a></li>
                <li><a href="#">Kontakt</a></li>
            </ul>
            <p>&copy;2023 Chomin. All rights reserved.</p>
        </footer>
    );
}

export default Footer;