import React, { useState, useEffect } from "react";
import "../css/navbar.css";

const Navbar = ({ changeLanguage, t }) => {
  const [navbarStyle, setNavbarStyle] = useState({});
  const [activeLanguage, setActiveLanguage] = useState("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarStyle({ background: "rgba(0,0,0,0.9)" });
      } else {
        setNavbarStyle({ background: "transparent" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    const sections = document.querySelectorAll("section");
    const options = { root: null, threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setActiveLanguage(lang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar" style={navbarStyle}>
      <div className="containerNav">
        <div className="navbar__logo">
          <p className="navbar__title">
            <a href="#">Brizuelafranco</a>
          </p>
        </div>
        <div className="navbar__menu" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <ul
          className={`navbar__links ${isMenuOpen ? "visible" : ""}`}
          onClick={toggleMenu}
        >
          <li
            className={`navbar__link ${
              activeSection === "home" ? "active" : ""
            }`}
            data-ref="home"
          >
            <a href="#home">{t("Navbar.Home")}</a>
          </li>
          <li
            className={`navbar__link ${
              activeSection === "about" ? "active" : ""
            }`}
            data-ref="about"
          >
            <a href="#about">{t("Navbar.About")}</a>
          </li>
          <li
            className={`navbar__link ${
              activeSection === "experience" ? "active" : ""
            }`}
            data-ref="experience"
          >
            <a href="#experience">{t("Navbar.Experience")}</a>
          </li>
          <li
            className={`navbar__link ${
              activeSection === "training" ? "active" : ""
            }`}
            data-ref="training"
          >
            <a href="#training">{t("Navbar.Education")}</a>
          </li>
          <li
            className={`navbar__link ${
              activeSection === "portfolio" ? "active" : ""
            }`}
            data-ref="portfolio"
          >
            <a href="#portfolio">{t("Navbar.Projects")}</a>
          </li>
          <li
            className={`navbar__link ${
              activeSection === "contact" ? "active" : ""
            }`}
            data-ref="contact"
          >
            <a href="#contact">{t("Navbar.Contact")}</a>
          </li>
          <li
            className={`navbar__link button--ln ${
              activeLanguage === "es" ? "active" : ""
            }`}
            onClick={() => handleLanguageChange("es")}
          >
            ES
          </li>
          <li
            className={`navbar__link button--ln ${
              activeLanguage === "en" ? "active" : ""
            }`}
            onClick={() => handleLanguageChange("en")}
          >
            EN
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
