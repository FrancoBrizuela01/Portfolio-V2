import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import "./css/media.css";
import { useTranslation } from "react-i18next";
import i18n from "./languages/i18n";

function App() {
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <Navbar changeLanguage={changeLanguage} t={t} />
      <Home t={t} />
      <About t={t} />
      <Experience t={t} />
      <Education t={t} />
      <Portfolio t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}

export default App;
