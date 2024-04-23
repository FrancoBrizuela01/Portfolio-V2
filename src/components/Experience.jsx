import React from "react";
import "../css/index.css";

const Experience = ({ t }) => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section__title">{t("Experience.Work Experience")}</h2>
        <div className="about__experience">
          <div className="about__description">
            <h2>{t("Experience.Full Stack Developer at Data IQ")}</h2>
            <h3>
              {" "}
              <span style={{ color: "#002B37" }}>Data</span>{" "}
              <span style={{ color: "#00D979" }}>IQ</span> |{" "}
              {t("Experience.Data IQ Date")}
            </h3>
            <p>{t("Experience.Data IQ Description")}</p>
          </div>
          <div className="about__description">
            <h2>{t("Experience.Full Stack Developer at IngerTec")}</h2>
            <h3>
              {" "}
              <span style={{ color: "#43ddfd" }}>IngerTec</span> |{" "}
              {t("Experience.IngerTec Date")}
            </h3>
            <p>{t("Experience.IngerTec Description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
