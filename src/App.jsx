import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";

import ProgressBar from "./components/progressbar/ProgressBar";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import BlogCards from "./components/blogcards/BlogCards";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Blogs from "./pages/blogs/Blogs";


function App() {
    const location = useLocation()

    return (
        <>
            <Routes>
                <Route path="/blogs" element={<Blogs />}/>
            </Routes>

            {location.pathname === "/blogs" ? null : (
                <>
                    <ProgressBar/>
                    <Nav/>
                    <Header/>
                    <BlogCards/>
                    <About/>
                    <Experience/>
                    <Projects/>
                    <Contact/>
                    <Footer/>
                </>
            )}
        </>
    );
}

export default App;