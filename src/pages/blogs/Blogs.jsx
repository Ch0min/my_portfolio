import React from "react";

import "./blogs.css";

import ProgressBar from "../../components/progressbar/ProgressBar";
import Footer from "../../components/footer/Footer";


import PORTFOLIO from "../../assets/portfoliowebsite.png"
import FITNESS from "../../assets/fitness.png"
import GAME from "../../assets/gamedev.png"
import CUPCAKE from "../../assets/cupcake.png"
import CARPORT from "../../assets/carport.png"
import {BsChevronRight} from "react-icons/bs";

function Blogs() {
    return (
        <section id="blogs">
            <h5>Tag et læs</h5>
            <h2>Mine Blogs</h2>

            <div className="container about__container">

                <div className="blogs__row">


                    {/*LEFT COLUMN*/}
                    <div className="blogs__left-col">
                        <div className="blogs__card-left">

                            <img src={PORTFOLIO} alt="Min portfolio hjemmeside Project"/>

                            <div className="blogs__card-left-content">
                                <h6>Nyeste opslag</h6>
                                <h2><span>Mit Portfolio Projekt</span></h2>
                                <h5>opslået d. 7. dec. 2023</h5>
                                <p>Jeg begyndte med, at udvikle min egen portfolio hjemmeside, da jeg skulle til at
                                    finde en praktikplads som Datamatiker.
                                    Grunden til dette var, at jeg gerne ville prøve kræfter med den viden jeg har lært
                                    fra Datamatiker studiet, samt lære og udvikle mig...
                                </p>
                                <a href="#" className="read__more">Læs mere</a>
                            </div>
                        </div>
                    </div>


                    {/*RIGHT COLUMN*/}
                    <div className="blogs__right-col">
                        <div className="blogs__card-transparent">
                            <h3>Kommende Blogs / Projekter</h3>
                            <ul>
                                <li>
                                    <a href=""><span>Portfolio Projekt</span></a>
                                    <p href="">Mit elsket hobby projekt, som jeg valgte at udvikle, da jeg gerne ville
                                        have mere erfaring
                                        med ReactJS.</p>
                                </li>
                                <li>
                                    <a href=""><span>Praktikplads Efteråret 2023</span></a>
                                    <p href="">Jeg skal skrive mit afsluttende Datamatikerprojekt efter min praktikplads til efteråret 2023.</p>
                                </li>
                                <li>
                                    <a href=""><span>Udvikling af et Kollegiums hjemmeside</span></a>
                                    <p href="">Jeg har budt mig på, at udvikle et kollegiums hjemmeside.</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>


            {/*BOTTOM COLUMN*/}
            <div className="blogs__card-bottom-container">


                <div className="blogs__side-text">
                    <div className="blogs__vertical-text">
                        Mine seneste blogs
                    </div>
                </div>
                {/*<a href="/blogs"><BsChevronRight className="blogs__vertical-icon"/></a>*/}


                <div className="blogs__card-bottom">
                    <div className="blogs__card-bottom-img">
                        <img src={PORTFOLIO} alt="Portfolio Projekt Blog"/>
                    </div>
                    <div className="blogs__card-bottom-content">
                        <h6>React JS</h6>

                        <h2><span>Mit Portfolio Projekt</span></h2>
                    </div>
                </div>

                <div className="blogs__card-bottom">
                    <div className="blogs__card-bottom-img">
                        <img src={FITNESS} alt="Fitness Rapport Projekt"/>
                    </div>
                    <div className="blogs__card-bottom-content">
                        <h6>React JS - Java</h6>

                        <h2><span>Fitness Full-Stack Projekt</span></h2>
                    </div>
                </div>


                <div className="blogs__card-bottom">
                    <div className="blogs__card-bottom-img">
                        <img src={GAME} alt=""/>
                    </div>
                    <div className="blogs__card-bottom-content">
                        <h6>Unity - C#</h6>

                        <h2><span>Top-Down Shooter - Unity</span></h2>
                    </div>
                </div>
            </div>


            <ProgressBar/>
            <Footer/>

            {/*<div className="container about__container">*/}


            {/*<h1>Welcome World</h1>*/}
            {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem blanditiis corporis cupiditate distinctio dolorum excepturi fugiat id in nihil numquam, quae quasi qui quo quos, recusandae saepe ut. Aut enim est eveniet exercitationem fuga nesciunt quae quia reprehenderit veritatis? Atque eos facere neque non perspiciatis, provident quidem quod saepe.</p>*/}


            {/*</div>*/}
        </section>
    );
}

export default Blogs;