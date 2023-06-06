import React from "react";
import {NavLink} from "react-router-dom";
import "./projects.css"

import PORTFOLIO from "../../assets/portfoliowebsite.png"
import PYTHONPROJECT from "../../assets/pythonproject.png"
import GAME from "../../assets/gamedev.png"
import FITNESS from "../../assets/fitness.png"
import CUPCAKE from "../../assets/cupcake.png"
import CARPORT from "../../assets/carport.png"

import {BsGithub} from "react-icons/bs";
import {BsBook} from "react-icons/bs";


function Projects() {

    return (
        <section id="projects">
            <h5><i>Mit seneste arbejde</i></h5>
            <h2>PROJEKTER</h2>

            <div className="container projects__container">

                <div className="projects__card">
                    <div className="projects__card-img">
                        <img src={PORTFOLIO} alt="Mit Portfolio Projekt"/>
                    </div>
                    <div className="projects__card-content">
                        <h2>Mit Portfolio Projekt</h2>
                        <p>Mit elsket hobby projekt, som jeg valgte at udvikle, da jeg gerne ville have mere erfaring
                            med ReactJS.</p>
                        <div className="projects__card-links">
                            <a href="https://github.com/Ch0min/my_portfolio" target="_blank"><BsGithub/></a>
                            <h5>Github</h5>
                            <NavLink to="/blogs"><BsBook/></NavLink>
                            <h5>Blog</h5>
                        </div>
                    </div>
                </div>

                <div className="projects__card">
                    <div className="projects__card-img">
                        <img src={PYTHONPROJECT} alt="Mit Python 4.Semester Valgfags Projekt"/>
                    </div>
                    <div className="projects__card-content">
                        <h2>Web-scraping / AI Projekt</h2>
                        <p>Vi har lavet et projekt, hvor vi har web-scrapet spil-data fra 2022 samt udviklet simple machine-learning algoritmer.</p>
                        <div className="projects__card-links">
                            <a href="https://github.com/Ch0min/python_exam" target="_blank"><BsGithub/></a>
                            <h5>Github</h5>
                        </div>
                    </div>
                </div>

                <div className="projects__card">
                    <div className="projects__card-img">
                        <img src={GAME} alt="Mit Game Development 4.Semester Valgfags Projekt"/>
                    </div>
                    <div className="projects__card-content">
                        <h2>Top-Down Shooter Unity</h2>
                        <p>Udviklet et Top-Down Shooter spil i valgfaget Game Development, med min studiegruppe.</p>
                        <div className="projects__card-links">
                            <a href="https://github.com/Ch0min/game_dev_eksamen" target="_blank"><BsGithub/></a>
                            <h5>Github</h5>
                        </div>
                    </div>
                </div>

                <div className="projects__card">
                    <div className="projects__card-img">
                        <img src={FITNESS} alt="Mit 3.Semester Gruppe Projekt"/>
                    </div>
                    <div className="projects__card-content">
                        <h2>Fitness Full-Stack Projekt</h2>
                        <p>Dette var mit 3.Semester Projekt med min studiegruppe, hvor man kan tilmelde sig
                            træningshold.</p>
                        <div className="projects__card-links">
                            <a href="https://github.com/Christoffer-Nielsen-Cph/3sem_exam_backend"
                               target="_blank"><BsGithub/></a>
                            <h5>Github</h5>
                            <NavLink to="/blogs"><BsBook/></NavLink>
                            <h5>Blog</h5>
                        </div>
                    </div>
                </div>

                <div className="projects__card">
                    <div className="projects__card-img">
                        <img src={CARPORT} alt="Mit 2.Semester Eksamens Projekt"/>
                    </div>
                    <div className="projects__card-content">
                        <h2>Carport Full-Stack Projekt</h2>
                        <p>Carport 2.Sem Eksamensprojekt - ud fra bestemte målinger kan man få tegnet og bestilt en
                            Carport.</p>
                        <div className="projects__card-links">
                            <a href="https://github.com/Ch0min/carport" target="_blank"><BsGithub/></a>
                            <h5>Github</h5>
                        </div>
                    </div>
                </div>

                <div className="projects__card">
                    <div className="projects__card-img">
                        <img src={CUPCAKE} alt="Mit 2.Semester Gruppe Projekt"/>
                    </div>
                    <div className="projects__card-content">
                        <h2>Cupcake Full-Stack Projekt</h2>
                        <p>Det her projekt er udviklet i 2.Semester i Java samt Servlets.</p>
                        <div className="projects__card-links">
                            <a href="https://github.com/Ch0min/cupcake" target="_blank"><BsGithub/></a>
                            <h5>Github</h5>
                            <NavLink to="/blogs"><BsBook/></NavLink>
                            <h5>Blog</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;