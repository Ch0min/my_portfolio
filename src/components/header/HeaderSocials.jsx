import React from "react";
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs"
function HeaderSocials() {
    return (
        <div className="header__socials animate-slide-left">
            <a href="https://github.com/Ch0min" target="_blank"><BsGithub/></a>
            <a href="https://www.linkedin.com/in/mark-lundgaard-543796258/" target="_blank"><BsLinkedin/></a>
            <a href="https://www.facebook.com/MarkLundgaard/" target="_blank"><BsFacebook/></a>
            <a href="https://www.instagram.com/markchomin/" target="_blank"><BsInstagram/></a>
        </div>
    );
}

export default HeaderSocials;