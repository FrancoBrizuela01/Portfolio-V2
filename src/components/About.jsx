import React from "react";
import "../css/index.css";

const About = ({ t }) => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section__title">{t("About.About")}</h2>
        <div className="about__grid">
          <div className="about__description">
            <h3>{t("About.Who am I?")}</h3>
            <h2>
              {t(
                "About.I'm Franco Brizuela, a Tech passionate and Web Developer"
              )}
            </h2>
            <p>
              {t(
                "About.I am a Full Stack programmer with experience in C#, .NET, Node.js, React, and JavaScript. I am completing my technical degree at UTN and have already worked on several projects, facing real challenges and dealing directly with clients. I love programming and am always learning something new."
              )}
            </p>
            <a
              className="button--cta"
              href="cv/FRANCO ALEXIS BRIZUELA.pdf"
              download="Franco Brizuela CV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-file-download"></i>
              {t("About.Download CV")}
            </a>
          </div>
          <div className="about__skills">
            <div className="skill__title">
              <h3>{t("About.My skills")}</h3>
            </div>
            <div className="skill__item">
              <i className="fas fa-globe"></i>
              <div className="skill__name">.NET</div>
            </div>
            <div className="skill__item">
              <i className="fab fa-node-js"></i>
              <div className="skill__name">NODE JS</div>
            </div>
            <div className="skill__item">
              <i className="fab fa-react"></i>
              <div className="skill__name">REACT</div>
            </div>
            <div className="skill__item">
              <i className="fab fa-js"></i>
              <div className="skill__name">JAVASCRIPT</div>
            </div>
            <div className="skill__item">
              <i className="fab fa-html5"></i>
              <div className="skill__name">HTML</div>
            </div>
            <div className="skill__item">
              <i className="fab fa-css3-alt"></i>
              <div className="skill__name">CSS</div>
            </div>
            <div className="skill__item">
              <i className="fas fa-database"></i>
              <div className="skill__name">MongoDB</div>
            </div>
            <div className="skill__item">
              <i className="fas fa-database"></i>
              <div className="skill__name">SQL</div>
            </div>
            <div className="skill__item">
              <i className="fab fa-git-alt"></i>
              <div className="skill__name">GIT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
