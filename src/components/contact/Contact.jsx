import React, { useState, useRef } from "react";
import "./contact.css"

import {FiMail} from "react-icons/fi"
import {BsGithub, BsLinkedin, BsTelephoneForward, BsInstagram, BsFacebook} from "react-icons/bs"
import {RiMessengerLine} from "react-icons/ri"

import emailjs, {send} from "emailjs-com"

function Contact() {
    const [hasSent, setHasSent] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_f9p5zay",
            "template_15qm1ls", form.current,
            "r1o0nh__jBXQ5yMQ_"
        ).then((result) => {
            console.log("Email sent successfully")
            e.target.reset()
            setHasSent(true)
        }).catch((error) => {
            console.error("Error sending email:", error)
        })
    }

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value
        setEmailError(!inputEmail.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/));
    }

    return (
        <section id="contact">
            <h5>Lad os tage en snak</h5>
            <h2>KONTAKT</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <div className="contact__options-info">

                        <div className="contact__option">
                            <a href="mailto:marklundgaard7@gmail.com" target="_blank">
                                <div className="contact__info-icon"><FiMail/></div>
                            </a>
                            <div className="contact__info-text">
                                <h3>Email</h3>
                                <a href="mailto:marklundgaard7@gmail.com" target="_blank">
                                    <p>marklundgaard7@gmail.com</p></a>
                            </div>
                        </div>

                        <div className="contact__option">
                            <a href="tel:+4529842712" target="_blank">
                                <div className="contact__info-icon"><BsTelephoneForward/></div>
                            </a>
                            <div className="contact__info-text">
                                <h3>Ring mig op</h3>
                                <a href="tel:+4529842712" target="_blank"><p>+45 29 84 27 12</p></a>
                            </div>
                        </div>

                        <div className="contact__option">
                            <a href="https://m.me/MarkLundgaard" target="_blank">
                                <div className="contact__info-icon"><RiMessengerLine/></div>
                            </a>
                            <div className="contact__info-text">
                                <h3>Messenger</h3>
                                <a href="https://m.me/MarkLundgaard" target="_blank"><p>Send en besked</p></a>
                            </div>
                        </div>
                        <h2 className="contact__socials-text">
                            <div className="contact__socials-shuriken"></div>
                            Find mig her
                        </h2>
                        <ul className="contact__socials-list">
                            <li><a href="https://github.com/Ch0min" target="_blank"><BsGithub/></a></li>
                            <li><a href="https://www.linkedin.com/in/mark-lundgaard-543796258/"
                                   target="_blank"><BsLinkedin/></a></li>
                            <li><a href="https://www.facebook.com/MarkLundgaard/" target="_blank"><BsFacebook/></a></li>
                            <li><a href="https://www.instagram.com/markchomin/" target="_blank"><BsInstagram/></a></li>
                        </ul>
                    </div>
                    {/*END OF INFO*/}

                    <div className="contact__form">
                        <form ref={form} onSubmit={sendEmail}>
                            <h2>Læg en besked</h2>

                            <div className="contact__form-input-box">
                                <input type="text" name="name" required/>
                                <span>Navn*</span>
                            </div>
                            <div className="contact__form-input-box">
                                <input type="email" name="email"
                                       required
                                       onChange={handleEmailChange}
                                       className={emailError ? "invalid" : ""}/>
                                <span>Email*</span>
                                {emailError && <p style={{color: "red", fontSize: "0.8rem"}}>Udfyld venligst din email korrekt</p>}
                            </div>
                            <div className="contact__form-input-box">
                                <input type="text" name="subject" required/>
                                <span>Emne*</span>
                            </div>


                            <div className="contact__form-input-box">
                                <textarea name="message" rows="10" required></textarea>
                                <span className="contact__form-input-text">Skriv din besked her...</span>
                            </div>

                            <div className="contact__form-input-box">
                                <button type="submit" className={`btn btn-primary ${hasSent ? "clicked" : ""}`}>Send</button>
                                {hasSent && (
                                    <p className="contact__form-input-confirmation">
                                        Tak for din besked, den er hermed sendt. Jeg vender tilbage hurtigst muligt!
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;