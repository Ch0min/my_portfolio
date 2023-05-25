import React from 'react';
import ProgressBar from "./components/progressbar/ProgressBar";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


function App() {
    return (
        <>
            <ProgressBar />
            <Nav />
            <Header />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />

        </>
    );
}

export default App;