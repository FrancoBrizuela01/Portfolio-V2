import React from "react";
import "../css/index.css";

const Education = ({ t }) => {
  return (
    <section id="training">
      <div className="container">
        <h2 className="section__title">{t("Education.Education")}</h2>
        <div className="training-list">
          <div className="training-item">
            <h2>{t("Education.Tecnicatura Superior en Programación")}</h2>
            <h3>
              {t("Education.Universidad Tecnológica Nacional")} |{" "}
              {t("Education.2018 - 2024")}
            </h3>
          </div>
          <div className="training-item">
            <h2>{t("Education..NET esencial")}</h2>
            <h3>
              {t("Education.Linkedin")} | {t("Education.March 2024")}
            </h3>
          </div>
          <div className="training-item">
            <h2>{t("Education.Qlik Sense Diseñador")}</h2>
            <h3>
              {t("Education.Data IQ")} | {t("Education.August 2023")}
            </h3>
          </div>
          <div className="training-item">
            <h2>
              {t(
                "Education.React - La Guía Completa: Hooks Context Redux MERN +15 Apps"
              )}
            </h2>
            <h3>
              {t("Education.Udemy")} | {t("Education.April 2021")}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
