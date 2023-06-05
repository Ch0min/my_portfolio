import React from "react";

import "./navblogs.css"


function NavBlogs() {
    const currentURL = window.location.pathname

    const showNavBlogs = currentURL === "/blogs"

    return (
        <div>
            {showNavBlogs && (
                <nav className="nav__glass__main-blogs">
                    <ul>
                        <li><a href="/">Tag mig til forsiden</a></li>
                        <div id="nav__ender"></div>
                    </ul>
                </nav>
            )}
        </div>
    );
}

export default NavBlogs;
