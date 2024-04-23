import React from "react";
import "../css/index.css";

const Portfolio = ({ t }) => {
  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="section__title">{t("Portfolio.Portfolio")}</h2>
        <h3 className="section__subtitle">{t("Portfolio.My projects")}</h3>
        <div className="section__underline"></div>
        <div className="portfolio__grid">
          <div className="portfolio__item">
            <img
              className="portfolio__img"
              alt="portfolio item"
              src="img/clothingOrders.jpeg"
            />
            <div className="portfolio__description">
              <h3 className="portfolio__description--title">
                {t("Portfolio.Clothing Orders")}
              </h3>
              <div className="buttons__container">
                <a
                  className="button"
                  href="https://clothingorder.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-globe-americas"></i>{" "}
                  {t("Portfolio.Website")}
                </a>
                <a
                  className="button"
                  href="https://github.com/FrancoBrizuela01/pedidos-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> {t("Portfolio.Repositorie")}
                </a>
              </div>
            </div>
          </div>

          <div className="portfolio__item">
            <img
              className="portfolio__img"
              alt="portfolio item"
              src="img/miley-cyrus.jpeg"
            />
            <div className="portfolio__description">
              <h3 className="portfolio__description--title">
                {t("Portfolio.Miley Cyrus Argentina")}
              </h3>
              <div className="buttons__container">
                <a
                  className="button"
                  href="https://mileycyrusargentina.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-globe-americas"></i>{" "}
                  {t("Portfolio.Website")}
                </a>
                <a
                  className="button"
                  href="https://github.com/FrancoBrizuela01/Miley-Cyrus-Argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> {t("Portfolio.Repositorie")}
                </a>
              </div>
            </div>
          </div>

          <div className="portfolio__item">
            <img
              className="portfolio__img"
              alt="portfolio item"
              src="img/recetas-bebidas.jpeg"
            />
            <div className="portfolio__description">
              <h3 className="portfolio__description--title">
                {t("Portfolio.Drinks Recipes")}{" "}
              </h3>
              <div className="buttons__container">
                <a
                  className="button"
                  href="https://drink-recipes-001.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-globe-americas"></i>{" "}
                  {t("Portfolio.Website")}
                </a>
                <a
                  className="button"
                  href="https://github.com/FrancoBrizuela01/drink-recipes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> {t("Portfolio.Repositorie")}
                </a>
              </div>
            </div>
          </div>

          <div className="portfolio__item">
            <img
              className="portfolio__img"
              alt="portfolio item"
              src="img/Factura.jpeg"
            />
            <div className="portfolio__description">
              <h3 className="portfolio__description--title">
                {t("Portfolio.Create invoice")}
              </h3>
              <div className="buttons__container">
                <a
                  className="button"
                  href="https://factura001.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-globe-americas"></i>{" "}
                  {t("Portfolio.Website")}
                </a>
                <a
                  className="button"
                  href="https://github.com/FrancoBrizuela01/Factura"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> {t("Portfolio.Repositorie")}
                </a>
              </div>
            </div>
          </div>

          <div className="portfolio__item">
            <img
              className="portfolio__img"
              alt="portfolio item"
              src="img/cuestionario.jpeg"
            />
            <div className="portfolio__description">
              <h3 className="portfolio__description--title">
                {t("Portfolio.Mobile App Quiz")}
              </h3>
              <div className="buttons__container">
                <a
                  className="button"
                  href="https://hardcore-euclid-c800d5.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-globe-americas"></i>{" "}
                  {t("Portfolio.Website")}
                </a>
                <a
                  className="button"
                  href="https://github.com/FrancoBrizuela01/Cuestionario-desarrollo-apps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> {t("Portfolio.Repositorie")}
                </a>
              </div>
            </div>
          </div>

          <div className="portfolio__item">
            <img
              className="portfolio__img"
              alt="portfolio item"
              src="img/covid19-tracker.jpeg"
            />
            <div className="portfolio__description">
              <h3 className="portfolio__description--title">
                {t("Portfolio.Covid 19-tracker-react")}
              </h3>
              <div className="buttons__container">
                <a
                  className="button"
                  href="https://covid19-tracker001.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-globe-americas"></i>{" "}
                  {t("Portfolio.Website")}
                </a>
                <a
                  className="button"
                  href="https://github.com/FrancoBrizuela01/covid19-tracker-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> {t("Portfolio.Repositorie")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
