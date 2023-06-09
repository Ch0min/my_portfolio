import React, { useState, useEffect } from 'react';
import "./progressbar.css"

function ProgressBar() {
    const [scrollTop, setScrollTop] = useState(0)

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (winScroll / height) * 100
        setScrollTop(scrolled)
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <div className="progress__main__wrapper">
            <div className="progress__main__style" style={{width: `${scrollTop}%`}}>
            </div>
        </div>
    );
}

export default ProgressBar;
