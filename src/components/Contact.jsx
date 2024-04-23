import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="contact">
        <div className="container">
          <h2 className="section__title">{t("Contact.Contact")}</h2>
          <h3 className="section__subtitle">
            {t("Contact.Feel free to contact me!")}
          </h3>
          <div className="contact__grid">
            <a
              href="mailto:franco-alexis16@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact__item">
                <i className="fas fa-paper-plane"></i>
                <p>{t("Contact.Mail Me")}</p>
              </div>
            </a>
            <a
              href="https://github.com/FrancoBrizuela01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact__item">
                <i className="fab fa-github"></i>
                <p>{t("Contact.Follow Me")}</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/franco-brizuela-359825162/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact__item">
                <i className="fab fa-linkedin-in"></i>
                <p>{t("Contact.Contact Me")}</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <div className="container corchete">
        <p>{"}"}</p>
      </div>
    </>
  );
};

export default Contact;
