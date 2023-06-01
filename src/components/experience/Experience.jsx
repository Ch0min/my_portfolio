import React from "react";
import "./experience.css"

import REACT from "../../assets/reactjs.png"
import HTML from "../../assets/html.png"
import CSS from "../../assets/css.png"
import JAVASCRIPT from "../../assets/javascript.png"
import PYTHON from "../../assets/python.png"
import JAVA from "../../assets/java.png"
import UNITY from "../../assets/unity.png"
import MYSQL from "../../assets/mysql.png"
import DOCKER from "../../assets/docker.png"
import GITHUB from "../../assets/github.png"

function Experience() {
    return (
        <section id="experience">
            <h5><i>Hvad jeg har lært af teknologier</i></h5>
            <h2>ERFARING</h2>

            <div className="container experience__container">

                <div className="experience__card">
                    <div className="experience__card-img">
                        <img src={REACT} alt=""/>
                    </div>
                    <div className="experience__card-content">
                        <h5>REACT JS</h5>
                    </div>
                </div>

                <div className="experience__card">
                    <div className="experience__card-img">
                        <img src={HTML} alt=""/>
                    </div>
                    <div className="experience__card-content">
                        <h5>HTML</h5>
                    </div>
                </div>

                <div className="experience__card">
                    <div className="experience__card-img">
                        <img src={CSS} alt=""/>
                    </div>
                    <div className="experience__card-content">
                        <h5>CSS</h5>
                    </div>
                </div>

                <div className="experience__card">
                    <div className="experience__card-img">
                        <img src={JAVASCRIPT} alt=""/>
                    </div>
                    <div className="experience__card-content">
                        <h5>JAVASCRIPT</h5>
                    </div>
                </div>

                <div className="experience__card">
                    <div className="experience__card-img">
                        <img src={PYTHON} alt=""/>
                    </div>
                    <div className="experience__card-content">
                        <h5>PYTHON</h5>
                    </div>
                </div>

                <div className="experience__card">
                    <div className="experience__card-img">
                        <img src={JAVA} alt=""/>
                    </div>
                    <div className="experience__card-content">
                        <h5>JAVA</h5>
                    </div>
                </div>

                <div className="experience__card">
                    <div className="experience__card-img">
                        <img src={UNITY} alt=""/>
                    </div>
                    <div className="experience__card-content">
                        <h5>UNITY</h5>
                    </div>
                </div>

                <div className="experience__card">
                    <div className="experience__card-img">
                        <img src={MYSQL} alt=""/>
                    </div>
                    <div className="experience__card-content">
                        <h5>MYSQL</h5>
                    </div>
                </div>

                <div className="experience__card">
                    <div className="experience__card-img">
                        <img src={DOCKER} alt=""/>
                    </div>
                    <div className="experience__card-content">
                        <h5>DOCKER</h5>
                    </div>
                </div>

                <div className="experience__card">
                    <div className="experience__card-img">
                        <img src={GITHUB} alt=""/>
                    </div>
                    <div className="experience__card-content">
                        <h5>GITHUB</h5>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Experience;