import React, { useEffect, useState } from "react";

import INFO from "../data/user";
import { ReactComponent as GithubSVG } from "../assets/github-142-svgrepo-com.svg";
import { ReactComponent as LinkedInSVG } from "../assets/linkedin-svgrepo-com.svg";
import { ReactComponent as CvSVG } from "../assets/cv-file-interface-symbol-svgrepo-com.svg";
import { Lightbulb } from "@theme-toggles/react";

import "./Home.css";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="homepage-container">
      <div className="homepage-lightbulb-container">
        <Lightbulb onToggle={handleToggle} reversed={isDarkMode} />
      </div>
      <div className="homepage-intro-card">
        <div className="title homepage-title">{INFO.main.name}</div>

        <div className="subtitle homepage-subtitle">{INFO.main.title}</div>
      </div>

      <div className="homepage-socials">
        <a href={INFO.cv.downloadLink} download={INFO.cv.fileName}>
          <CvSVG className="homepage-social-icon" />
        </a>
        <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
          <LinkedInSVG className="homepage-social-icon" />
        </a>
        <a href={INFO.socials.github} target="_blank" rel="noreferrer">
          <GithubSVG className="homepage-social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Home;
