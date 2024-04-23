import React from "react";
import "../css/index.css";

const Home = ({ t }) => {
  return (
    <section id="home" className="home">
      <div className="home__background"></div>
      <div
        className="home__profile"
        style={{ backgroundImage: "url(img/home_profile.jpg)" }}
      ></div>
      <div className="home__description">
        <span className="home__title--primary">{t("Home.Hello!")}</span>
        <h1 className="home__title">{t("Home.I'm")} Franco Brizuela.</h1>
        <span className="home__title--secondary">- Full stack developer -</span>
      </div>
    </section>
  );
};

export default Home;
