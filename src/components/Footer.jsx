import React from "react";

const Footer = ({ t }) => {
  const currentYear = new Date().getFullYear(); // Obtiene el año actual

  return (
    <footer className="footer">
      <div className="container">
        <p>
          Copyright © {currentYear}. <a href="#">@francobrizuela</a> <br />
          {t("Footer.All Rights Reserved")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
