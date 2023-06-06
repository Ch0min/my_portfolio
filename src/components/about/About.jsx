import React, {useState, useEffect, useRef} from "react";
import "./about.css"

import ME from "../../assets/me1.jpg"
import VIETNAM from "../../assets/vietnam.png"
import CV from "../../assets/mit_CV.pdf"

import {CgSpinnerAlt} from "react-icons/cg"
import {BiJoystick} from "react-icons/bi"
import {FaDumbbell} from "react-icons/fa"
import {CiBeerMugFull} from "react-icons/ci"
import {FaBirthdayCake} from "react-icons/fa"
import {BiParty} from "react-icons/bi"

function About() {
    const [isShaking, setIsShaking] = useState(false)

    const handleShurikenClick = () => {
        setIsShaking(true)
        setTimeout(() => {
            setIsShaking(false)
        }, 1000)
    }


    return (
        <section id="about">
                <h5><i>Bliv lidt klogere på</i></h5>
                <h2>HVEM JEG ER</h2>
            <div className={isShaking ? "shake__animation" : ""}>
                <div className="container about__container">
                    <div className="about__me-frame">
                        <div className="about__me-image">
                            <img src={ME} alt="Et Billede af Mig"/>
                            <div className="about__me-image-shuriken" onClick={handleShurikenClick}>
                            </div>
                            <h1>00</h1>
                            <a href="#contact" className="btn btn-primary">Kontakt mig</a>
                        </div>
                    </div>
                    {/*END OF IMAGE FRAME*/}

                    <div className="about__details">
                        <article className="about__details-card">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <h2>Ekstra viden</h2>
                            <h1>01</h1>

                            <h4>Alder</h4>
                            <small className="text-light">
                                <BiParty className="about__details-icon"/>
                                24 år
                            </small>

                            <h4>Fødselsdag</h4>
                            <small className="text-light">
                                <FaBirthdayCake className="about__details-icon"/>
                                d. 4. marts, 1999
                            </small>

                            <h4>Land</h4>
                            <small className="text-light">
                                <img src={VIETNAM} alt="Flag af Vietnam"/>
                                Vietnam
                            </small>
                        </article>
                    </div>
                    {/*END OF DETAILS*/}


                    <div className="about__content">
                        <h2>En lille bitte smule om mig...</h2>
                        <i><h4 className="about__content-header">Hejsa derude, mit navn er Mark Lundgaard og jeg er en Datamatiker studerende, som går på CPHBusiness. <br/>
                            og JEG ELSKER AT UDVIKLE OG DESIGNE KODE!
                        </h4></i>
                        <h5 className="about__content-text">
                            Jeg har det seneste år fået en interesse i, at opbygge og designe hjemmesider i React JS, og jeg elsker hvert sekund af det.
                            Man kan roligt sige at der, hvor jeg har lagt en del timer samt blod, sved og tårer, er i mit Portfolio hobby projekt,
                            hvilket har givet mig endnu mere ny viden og læring til bagagen, indenfor HTML/CSS og React JS.
                            <br/><br/>
                            Når jeg ikke er limet til min computer, så siger jeg sjældent nej tak til en kold bajer med vennerne, ellers så nyder jeg tiden med familien.
                            <br/>
                            Hvis jeg skulle beskrive mig selv kort, så kender mine nære mig som kreativ, passioneret, udadvendt og nysgerrig af natur med et stort gå på mod til,
                            at lære noget nyt.
                            <br/><br/>
                            Som sagt, så ønsker jeg at finde en praktikplads til efteråret 2023, som enten Frontend eller Full-stack udvikler.
                            Når det så er sagt, så er Backend udvikler ikke helt udelukket, så jeg er stadig åbent for det hele, hvis den helt rette arbejdsplads tilbyder.
                            <br/><br/>
                            Det var vidst nok om mig, jeg håber vi ses derude en dag, ellers så <a href="#contact">lad os tage en snak!</a>

                        </h5>
                        <div className="about__cards">
                            <article className="about__card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <h2>Uddannelse</h2>

                                <h1>02</h1>
                                <h4>Datamatiker</h4>
                                <small className="text-light">
                                    <CgSpinnerAlt className="about__card-icon"/>
                                    2021 - (2023 vinter) <br/>
                                    CphBusiness
                                </small>

                                <h4>STX</h4>
                                <small className="text-light">
                                    <CgSpinnerAlt className="about__card-icon"/>
                                    2015 - 2018 <br/>
                                    Tårnby Gymnasium
                                </small>

                                <h4>Folkeskole</h4>
                                <small className="text-light">
                                    <CgSpinnerAlt className="about__card-icon"/>
                                    2005 - 2015 <br/>
                                    Kastrupgårdsskolen
                                </small>
                            </article>


                            <article className="about__card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <h2>Arbejde</h2>

                                <h1>03</h1>
                                <h4>Pakkebud</h4>
                                <small className="text-light">
                                    <CgSpinnerAlt className="about__card-icon"/>
                                    2020 nov. - 2021 sep. <br/>
                                    Postnord
                                </small>

                                <h4>Area Manager</h4>
                                <small className="text-light">
                                    <CgSpinnerAlt className="about__card-icon"/>
                                    2018 sep. - 2020 nov.<br/>
                                    McDonald's
                                </small>

                                <h4>Kundeservice</h4>
                                <small className="text-light">
                                    <CgSpinnerAlt className="about__card-icon"/>
                                    2018 sommer <br/>
                                    Amager IS
                                </small>
                                <a href={CV} download id="cv__btn">
                                    <h6 className="about__card__cv__text">Hent CV for mere info...</h6>
                                </a>

                            </article>


                            <article className="about__card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <h2>Hobbies</h2>

                                <h1>04</h1>
                                <h4>Gaming!</h4>
                                <small className="text-light"><BiJoystick className="about__hobbies-icon"/>Det er altid
                                    hygge, at game lidt med vennerne.</small>

                                <h4>Styrketræning</h4>
                                <small className="text-light"><FaDumbbell className="about__hobbies-icon"/>Jeg har mit
                                    eget
                                    lille homegym, klar på en session?</small>

                                <h4>Nogle der sagde øl?</h4>
                                <small className="text-light"><CiBeerMugFull className="about__hobbies-icon"/>Ville
                                    aldrig
                                    sige nej til en kold bajer.</small>
                            </article>

                        </div>
                    </div>
                    {/*END OF CARDS CONTENT*/}
                </div>
            </div>
        </section>
    );
}

export default About;