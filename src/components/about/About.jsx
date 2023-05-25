import React from "react";
import "./about.css"

import ME from "../../assets/me1.jpg"

import {CgSpinnerAlt} from "react-icons/cg"
import {CgSpinnerTwoAlt} from "react-icons/cg"
import {BiJoystick} from "react-icons/bi"
import {FaDumbbell} from "react-icons/fa"


function About() {
    return (
        <section id="about">
            <h5>Bliv lidt klogere på</h5>
            <h2><i>HVEM JEG ER</i></h2>

            <div className="container about__container">

                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="A Picture of Me"/>
                    </div>
                </div>

                <div className="about__content">
                    <h2>Hey friend!</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Corporis cumque esse perspiciatis qui repellat temporibus.
                        Cupiditate esse eveniet ipsum laudantium libero maiores saepe veniam voluptatem.
                        Aliquid culpa ipsa numquam reprehenderit.Cupiditate esse eveniet ipsum laudantium libero maiores
                        saepe veniam voluptatem.
                        Aliquid culpa ipsa numquam reprehenderit.Cupiditate esse eveniet ipsum laudantium libero maiores
                        saepe veniam voluptatem.
                        Aliquid culpa ipsa numquam reprehenderit.
                    </p>

                    <div className="about__cards">

                        <article className="about__card">
                            <h2>Education</h2>
                            <h4>Datamatiker / CS</h4>
                            <small className="text-light">
                                <CgSpinnerAlt className="edu__icon"/>
                                2021 - (2023 winter) <br/>
                                CphBusiness
                            </small>

                            <h4>STX</h4>
                            <small className="text-light">
                                <CgSpinnerAlt className="edu__icon"/>
                                2015 - 2018 <br/>
                                Tårnby Gymnasium
                            </small>

                            <h4>Folkeskole</h4>
                            <small className="text-light">
                                <CgSpinnerAlt className="edu__icon"/>
                                2005 - 2015 <br/>
                                Kastrupgårdsskolen
                            </small>
                        </article>


                        <article className="about__card">
                            <h2>Work</h2>

                            <h4>Postman/Parcel</h4>
                            <small className="text-light">
                                <CgSpinnerTwoAlt className="work__icon"/>
                                2020 nov. - 2021 sep. <br/>
                                Postnord
                            </small>

                            <h4>Area Manager</h4>
                            <small className="text-light">
                                <CgSpinnerTwoAlt className="work__icon"/>
                                2018 sep. - 2020 nov.<br/>
                                McDonald's
                            </small>

                            <h4>Customer Service</h4>
                            <small className="text-light">
                                <CgSpinnerTwoAlt className="work__icon"/>
                                2018 summer <br/>
                                Amager IS
                            </small>
                            <h6>Download CV to see more...</h6>

                        </article>


                        <article className="about__card">
                            <h2>Hobbies</h2>

                            <h4>Gaming!</h4>
                            <small className="text-light">
                                <BiJoystick className="hobbies__icon"/>
                                Always love to game with my friends.
                            </small>

                            <h4>Working Out</h4>
                            <small className="text-light">
                                <FaDumbbell className="hobbies__icon"/>
                                I have my own home gym. Up for a session?
                            </small>

                            <h4>Love Taking a Beer</h4>
                            <small className="text-light">
                                <FaDumbbell className="hobbies__icon"/>
                                I never say no to a little
                            </small>
                        </article>


                        {/*<div className="button__test">LOGIN</div>*/}


                    </div>
                </div>

            </div>

        </section>
    );
}

export default About;