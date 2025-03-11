import React, { useEffect } from "react";

import INFO from "../data/user";
import { ReactComponent as GithubSVG } from '../assets/github-142-svgrepo-com.svg';
// import { ReactComponent as GithubSVG } from '../assets/github-svgrepo-com1.svg';
import { ReactComponent as LinkedInSVG } from '../assets/linkedin-svgrepo-com.svg';
import { ReactComponent as CvSVG } from '../assets/cv-file-interface-symbol-svgrepo-com.svg';
import { Lightbulb } from "@theme-toggles/react";

import "./Home.css";

const Home = () => {
    useEffect(() => {
        const isDarkMode = localStorage.getItem("dark-mode") === "true";
        document.body.classList.toggle("dark-mode", isDarkMode);
    }, []);

    const handleToggle = () => {
        const isDarkMode = document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", isDarkMode);
    }

    return (
        <div className="homepage-container">
            <div className="homepage-lightbulb-container">
                <Lightbulb onToggle={handleToggle}/>
            </div>
            <div className="homepage-intro-card">
                <div className="title homepage-title">
                    {INFO.main.name}
                </div>

                <div className="subtitle homepage-subtitle">
                    {INFO.main.title}
                </div>
            </div>

            <div className="homepage-socials">
                <a 
                    href={INFO.cv.downloadLink}
                    download={INFO.cv.fileName}>
                    <CvSVG className="homepage-social-icon" />
                </a>
                <a
                    href={INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                >
                    <LinkedInSVG className="homepage-social-icon" />
                </a>
                <a
                    href={INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                >
                   <GithubSVG className="homepage-social-icon" />
                </a>
            </div>
        </div>
    )
}

export default Home;