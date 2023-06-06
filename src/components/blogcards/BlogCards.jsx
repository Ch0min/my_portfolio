import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import "./blogcards.css"

import PORTFOLIO from "../../assets/portfoliowebsite.png"
import FITNESS from "../../assets/fitness.png"
import CUPCAKE from "../../assets/cupcake.png"

import {BsChevronRight} from "react-icons/bs"

function BlogCards() {
    const [showAnimation, setShowAnimation] = useState(false)

    useEffect(() => {
        setShowAnimation(true)
    }, []);

    return (
        <section id="blogcards">

            <div className={`container blogcards__container ${showAnimation ? "show" : ""}`}>

                <div className="blogcards__side-text animate-slide-up-mid">
                    <NavLink to="/blogs"><div className="blogcards__vertical-text">
                        Mine seneste blogs
                    </div></NavLink>
                </div>
                <NavLink to="/blogs"><BsChevronRight className="blogcards__vertical-icon animate-fade-slow"/></NavLink>


                <div className="blogcards__box animate-slide-left-slow">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                    <div className="blogcards__image">
                        <img src={PORTFOLIO} alt="Blog image"/>
                    </div>
                    <div className="blogcards__content">
                        <h5>d. 25. maj. 2023</h5>
                        <NavLink to="/blogs" className="blogcards__title">Processen af min Portfolio website</NavLink>
                        <p>Jeg begyndte med, at udvikle min egen portfolio hjemmeside, da jeg skulle til at
                            finde en praktikplads som...</p>
                        <NavLink to="/blogs" className="read__more"><small>Læs mere</small></NavLink>
                    </div>
                </div>

                <div className="blogcards__box animate-slide-left-med">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                    <div className="blogcards__image">
                        <img src={FITNESS} alt="Blog image"/>
                    </div>
                    <div className="blogcards__content">
                        <h5>d. 17. jan. 2023</h5>
                        <NavLink to="/blogs" className="blogcards__title">Dyk ned i vores Fitness-Web Rapport</NavLink>
                        <p>Vi har valgt at lave dette produkt, fordi vi synes at det dækker over FN’s verdensmål..
                            (kommer snart...)</p>
                        {/*<p>Vi har valgt at lave dette produkt, fordi vi synes at det dækker over FN’s verdensmål*/}
                        {/*    “Sundhed og trivsel” i det...</p>*/}
                        <NavLink to="/blogs" className="read__more"><small>Læs mere</small></NavLink>
                    </div>
                </div>

                <div className="blogcards__box animate-slide-left">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                    <div className="blogcards__image">
                        <img src={CUPCAKE} alt="Blog image"/>
                    </div>
                    <div className="blogcards__content">
                        <h5>d. 17. jan. 2023</h5>
                        <NavLink to="/blogs" className="blogcards__title">Læs vores Cupcake Webshop Rapport</NavLink>
                        <p>Projektet handler om at kode en simpel dansk webshop til firmaet Olsker Cupcakes ApS.. (kommer snart...)</p>
                        {/*<p>Projektet handler om at kode en simpel dansk webshop til firmaet Olsker Cupcakes ApS, hvor kunderne kan...</p>*/}
                        <NavLink to="/blogs" className="read__more"><small>Læs mere</small></NavLink>
                    </div>
                </div>

            </div>


        </section>
    );
}

export default BlogCards;
















