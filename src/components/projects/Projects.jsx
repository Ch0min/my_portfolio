import React from "react";
import "./projects.css"

import PORTFOLIO from "../../assets/portfoliowebsite.png"
import P2 from "../../assets/portfolio2.jpg"
import P3 from "../../assets/portfolio3.jpg"
import FITNESS from "../../assets/fitness.png"
import GAME from "../../assets/gamedev.png"
import CUPCAKE from "../../assets/cupcake3.png"
import CARPORT from "../../assets/carport.png"
import {BsGithub} from "react-icons/bs";
import {BsBook} from "react-icons/bs";


function Projects() {
    return (
        <section id="projects">
            <h5>Se hvad jeg har lavet af</h5>
            <h2>PROJEKTER</h2>

            <div className="container projects__container">

                <div className="projects__card">
                    <div className="projects__card-img">
                        <img src={PORTFOLIO} alt=""/>
                    </div>
                    <div className="projects__card-content">
                        <h2>Mit Portfolio Projekt</h2>
                        <p>Mit elsket hobby projekt, som jeg valgte at udvikle, da jeg gerne ville have mere erfaring
                            med ReactJS.</p>
                        <div className="projects__card-links">
                            <a href="https://github.com/Ch0min/my_portfolio" target="_blank"><BsGithub/></a>
                            <h5>Github</h5>
                            <a href="#"><BsBook/></a>
                            <h5>Blog Post</h5>
                        </div>
                    </div>
                </div>

                <div className="projects__card">
                    <div className="projects__card-img">
                        <img src={FITNESS} alt=""/>
                    </div>
                    <div className="projects__card-content">
                        <h2>Fitness Full-Stack Projekt</h2>
                        <p>Dette var mit 3.Semester Projekt, hvor man kan tilmelde sig træningshold.</p>
                        <div className="projects__card-links">
                            <a href="https://github.com/Ch0min/my_portfolio" target="_blank"><BsGithub/></a>
                            <h5>Github</h5>
                            <a href="#"><BsBook/></a>
                            <h5>Blog Post</h5>
                        </div>
                    </div>
                </div>

                <div className="projects__card">
                    <div className="projects__card-img">
                        <img src={GAME} alt=""/>
                    </div>
                    <div className="projects__card-content">
                        <h2>Top-Down Shooter Unity</h2>
                        <p>Udviklet et Top-Down Shooter spil i valgfaget Game Development, med min studiegruppe.</p>
                        <div className="projects__card-links">
                            <a href="https://github.com/Ch0min/my_portfolio" target="_blank"><BsGithub/></a>
                            <h5>Github</h5>
                            <a href="#"><BsBook/></a>
                            <h5>Blog Post</h5>
                        </div>
                    </div>
                </div>

                <div className="projects__card">
                    <div className="projects__card-img">
                        <img src={CARPORT} alt=""/>
                    </div>
                    <div className="projects__card-content">
                        <h2>Carport Full-Stack Projekt</h2>
                        <p>Carport 2.Sem Eksamensprojekt - ud fra bestemte målinger kan man få tegnet og bestilt en Carport.</p>
                        <div className="projects__card-links">
                            <a href="https://github.com/Ch0min/my_portfolio" target="_blank"><BsGithub/></a>
                            <h5>Github</h5>
                            <a href="#"><BsBook/></a>
                            <h5>Blog Post</h5>
                        </div>
                    </div>
                </div>

                <div className="projects__card">
                    <div className="projects__card-img">
                        <img src={CUPCAKE} alt=""/>
                    </div>
                    <div className="projects__card-content">
                        <h2>Cupcake Full-Stack Projekt</h2>
                        <p>Det her projekt er udviklet i 2.Semester i Java samt Servlets.</p>
                        <div className="projects__card-links">
                            <a href="https://github.com/Ch0min/my_portfolio" target="_blank"><BsGithub/></a>
                            <h5>Github</h5>
                            <a href="#"><BsBook/></a>
                            <h5>Blog Post</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;