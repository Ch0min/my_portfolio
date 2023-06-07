import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import "./blogs.css";

import NavBlogs from "../../components/navblogs/NavBlogs";
import ProgressBar from "../../components/progressbar/ProgressBar";
import Footer from "../../components/footer/Footer";

import PORTFOLIO1 from "../../assets/portfoliowebsite.png"
import PORTFOLIO2 from "../../assets/portfoliowebsite2.png"
import FITNESS from "../../assets/fitness.png"
import CUPCAKE from "../../assets/cupcake.png"


function Blogs() {
    const [showAnimation, setShowAnimation] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        setShowAnimation(true)
    }, []);

    const handleNavClick = () => {
        navigate("/")
    }

    return (
        <div id="blogs">
            <h5 className="blogs__h5">Tag et læs</h5>
            <h2 className="blogs__h2">MINE BLOGS</h2>

            <NavBlogs onClick={handleNavClick} />


            <div className="container about__container">

                <div className={`blogs__row ${showAnimation ? "show" : ""}`}>


                    {/*LEFT COLUMN*/}
                    <div className="blogs__left-col">
                        <div className="blogs__card-left animate-slide-left">

                            <img src={PORTFOLIO2} alt="Min portfolio hjemmeside Project"/>

                            <div className="blogs__card-left-content">
                                <input id="ch" type="checkbox"/>

                                <h6>Nyeste opslag</h6>
                                <h2><span>Mit Portfolio Projekt</span></h2>
                                <h4>opslået d. 7. dec. 2023</h4>
                                <p>Jeg begyndte med, at udvikle min egen responsive portfolio hjemmeside, da jeg skulle til at
                                    finde en praktikplads som Datamatiker.
                                    Grunden til dette var, at jeg gerne ville prøve kræfter med den viden jeg har lært
                                    fra Datamatiker studiet, samt lære og udvikle mig
                                    endnu mere inden for specielt React JS, da dette var et framework jeg faldt med
                                    begge ben ned i, eftersom vi lærte det
                                    i 3. semester.
                                </p>
                                <div className="blogs__card-left-content-expand">
                                    <p>
                                        <p>Efter at have udviklet mine 3. semesters eksamensprojekter, samt et demo
                                            projekt af en kollegiehjemmeside steg min
                                            interesse endnu mere for React frameworket. Mit mål med at lave en portfolio
                                            hjemmeside er ikke bare blot at vise mine kompetencer, men
                                            mere for at udvikle mig endnu mere, og prøve at lære en masse nye sjove ting
                                            inden for React JS verdenen.</p>

                                        <p>Jeg har taget inspiration fra en masse forskellige portfolio projekter og
                                            fundet en masse hjælp og ny viden inden for React JS,
                                            hvilket har hjulpet mig med kreativiteten, samt er min HTML og især CSS
                                            viden og kodeskrivning også blevet endnu mere rustet.
                                            Jeg har ikke været bange for, at rive mig ud i noget helt nyt eller give
                                            nogle features mit helt eget lille twist, som jeg
                                            så derefter kunne tilføje og implementere til mit projekt, hvis det passede
                                            ind.</p>
                                        <br/>
                                        <br/>

                                        <h5>Jeg vil dermed gerne hive jer delvist med ind i min thought-process i gennem
                                            mit portfolio projekt.</h5>

                                        <p>For det første startede jeg ud med, at tænke "hvad skal en portfolio
                                            hjemmeside indeholde for en studerende som mig?". Jeg prøvede at rekognoscere end masse forskellige portfolio hjemmeside fra andre
                                            personer, samt kigge på en håndfuld guides
                                            på youtube eller andre diverse medier. Dette gav mig en bred forståelse for,
                                            hvilke features og komponenter der
                                            ville være fede at implementere i min egen portfolio hjemmeside, herunder
                                            ville jeg gerne gøre den mere interaktiv og sjov.
                                            <br/>Derefter gik jeg til værks!</p>
                                        <br/>
                                        <br/>

                                        <h5>
                                            Jeg startede ud med, at opbygge projektets struktur, da jeg elsker at ens
                                            opbygning og refactoring er optimalt hele vejen igennem.
                                            Det giver mig også et bedre overblik i arbejdsmiljøet, når ens struktur er
                                            pænt sat op fra start af.</h5>


                                        <p><b>STRUKTUR:</b></p>
                                        <ul>
                                            <li><p>1. &nbsp;Jeg startede så småt ud med, at lave folders til de features
                                                jeg gerne ville implementere under min components src folder.</p></li>
                                            <li><p>2. &nbsp;Derefter tilføjet jeg en jsx fil samt en tilhørende css fil
                                                til folderen. På den måde, vidste jeg hvad mit fundament ville være.</p>
                                            </li>
                                            <li><p>3. &nbsp;Nu hvor jeg havde opbygget et fundament, så vidste jeg at
                                                det ville blive nemmere, at implementere nye komponenter,
                                                hvis kreativiteten brød løs.</p></li>
                                            <li><p>4. &nbsp;Ved at opbygge en struktur fra start af, så fik jeg et
                                                ekstremt
                                                stabilt overblik over mine komponenter og filer helt fra start af.</p>
                                            </li>
                                        </ul>
                                        <br/>
                                        <br/>
                                        <h5>Under hele mit workflow valgte jeg, at droppe et Kanban board, da det var et
                                            personligt solo projekt.
                                            Jeg valgte dermed i stedet for, at skrive alle nye implementeringer ned i et
                                            dokument, samt skrive TODOs og nye idéer som jeg fik løbende ned i README
                                            filen.</h5>

                                        <p><b>WORKFLOW LISTE</b></p>
                                        <ul>
                                            <li><p>1. &nbsp;Lave en global css fil: index.css</p></li>
                                            <li><p>2. &nbsp;Designe Headeren</p></li>
                                            <li><p>3. &nbsp;Designe Navbar, samt hvilket features</p></li>
                                            <li><p>4. &nbsp;Designe Footer</p></li>
                                            <li><p>5. &nbsp;Designe About</p></li>
                                            <li><p>6. &nbsp;Designe Experience</p></li>
                                            <li><p>7. &nbsp;Designe Projects</p></li>
                                            <li><p>8. &nbsp;Designe Header Blogcards</p></li>
                                            <li><p>9. &nbsp;Designe Blogs</p></li>
                                            <li><p>10. &nbsp;Refactoring</p></li>
                                        </ul>
                                        <br/>

                                        <p><b>WORKFLOWET</b></p>
                                        <p>(Jeg lavet Media Screens til stort set alle Komponenter - Mindre skærme og
                                            mobilskærme løbende.)
                                        </p>
                                        <ul>
                                            <li><p>1. &nbsp;
                                                Jeg startede ud med, at lave en index.css fil,
                                                som ville indeholde de "globale variabler" og css kodestruktur for mit
                                                HTML.
                                            </p></li>
                                            <li><p>2. &nbsp;
                                                Dernæst begyndte jeg at udvikle min Header. Designet legede jeg lidt
                                                med, og til sidst faldt alle brikkerne på plads.
                                                Jeg synes selv jeg fik lavet en fed header, som ville fungere som en
                                                præsentation for min hjemmeside.
                                                <br/>
                                                Jeg begyndte dermed, at arbejde med animations i css, både ren css
                                                animations og keyframes.
                                                <br/>
                                                Dette var en helt ny boldgade for mig,
                                                men synes egentlig det var meget sjovt, så derfor fik min Header en
                                                masse hyggelige animations.
                                                <br/>
                                                Jeg synes ikke rigtigt, at min Header og fremtidige animations ville
                                                passe ind i de tilhørende CSS filer, så derfor valgte jeg lave en
                                                separat animations.css fil.
                                            </p></li>
                                            <li><p>3. &nbsp;
                                                Efter min Header begyndte jeg, at udvikle min Navbar, som skulle være
                                                fixed/sticky til skærmen.
                                                <br/>
                                                Dette var noget helt nyt for mig, da jeg altid har lavet en traditionel
                                                Navbar i min Header, som altid var i toppen af siden og ikke fulgte med
                                                en hvis man scrolled.
                                                Denne ide synes jeg var den helt rette for min hjemmeside, da jeg gerne
                                                ville prøve på noget utraditionelt.
                                                <br/>
                                                Til min Navbar på mobilen ville jeg lave noget andet end en simpel
                                                burgermenu, så dermed valgte jeg at lave et lille nyt design, som passer
                                                med min main Navbar.

                                            </p></li>
                                            <li><p>4. &nbsp;
                                                Fortsættes...

                                                {/*</p></li>*/}
                                                {/*<li><p>5. &nbsp;*/}


                                                {/*</p></li>*/}
                                                {/*<li><p>6. &nbsp;*/}


                                                {/*</p></li>*/}
                                                {/*<li><p>7. &nbsp;*/}


                                                {/*</p></li>*/}
                                                {/*<li><p>8. &nbsp;*/}


                                                {/*</p></li>*/}
                                                {/*<li><p>9. &nbsp;*/}


                                                {/*</p></li>*/}
                                                {/*<li><p>10. &nbsp;*/}

                                            </p></li>
                                        </ul>
                                        <br/>
                                        <h5>Bloggen er ikke skrevet helt færdigt endnu, da Portfolio hjemmesiden stadig
                                            mangler nogle små justeringer og features.</h5>
                                        <br/>
                                        <b>MEDIA SCREENS</b>
                                        <ul>
                                            <li><small>max-width: 1440px</small></li>
                                            <li><small>max-width: 1180px</small></li>
                                            <li><small>max-width: 1024px</small></li>
                                            <li><small>max-width: 896px</small></li>
                                            <li><small>max-width: 668px</small></li>
                                            <li><small>max-width: 600px</small></li>
                                        </ul>
                                        <br/>
                                    </p>
                                    <label htmlFor="ch"><span>Vis mindre</span></label>
                                </div>
                                <label htmlFor="ch"><span>Læs mere</span></label>
                            </div>
                        </div>
                    </div>


                    {/*RIGHT COLUMN*/}
                    <div className="blogs__right-col">
                        <div className="blogs__card-transparent animate-slide-right">
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
                                    <p href="">Jeg skal skrive mit afsluttende Datamatikerprojekt efter min praktikplads
                                        til efteråret 2023.</p>
                                </li>
                                <li>
                                    <a href=""><span>Python Eksamen Projekt</span></a>
                                    <p href="">En rapport af vores arbejdsproces.</p>
                                </li>
                                <li>
                                    <a href=""><span>Kollegiehjemmeside Udvikling</span></a>
                                    <p href="">Jeg har budt mig på, at udvikle et kollegiums hjemmeside.</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>


            {/*BOTTOM COLUMN*/}
                <div className={`blogs__card-bottom-container ${showAnimation ? "show" : ""}`}>
                <div className="blogs__side-text animate-slide-up-mid">
                    <div className="blogs__vertical-text">
                        Mine ældste blogs
                    </div>
                </div>
                <div className="blogs__card-bottom animate-slide-left-slow">
                    <div className="blogs__card-bottom-img">
                        <img src={PORTFOLIO1} alt="Portfolio Projekt Blog"/>
                    </div>
                    <div className="blogs__card-bottom-content">
                        <h6>React JS</h6>

                        <h2><span>Mit Portfolio Projekt</span></h2>
                    </div>
                </div>

                <div className="blogs__card-bottom animate-slide-left-med">
                    <div className="blogs__card-bottom-img">
                        <img src={FITNESS} alt="Fitness Rapport Projekt"/>
                    </div>
                    <div className="blogs__card-bottom-content">
                        <h6>React JS - Java</h6>

                        <h2><span>Fitness Full-Stack Projekt</span></h2>
                    </div>
                </div>


                <div className="blogs__card-bottom animate-slide-left">
                    <div className="blogs__card-bottom-img">
                        <img src={CUPCAKE} alt=""/>
                    </div>
                    <div className="blogs__card-bottom-content">
                        <h6>Unity - C#</h6>

                        <h2><span>Top-Down Shooter - Unity</span></h2>
                    </div>
                </div>
            </div>
            <ProgressBar/>
            <Footer/>
        </div>
    );
}

export default Blogs;