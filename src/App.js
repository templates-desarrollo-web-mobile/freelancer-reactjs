import React from "react";
import Menu from "./components/Top/Menu/Menu";
import Footer from "./components/Bottom/Footer";
import FooterInfo from "./components/Bottom/FooterInfo";
import Contact from "./components/Bottom/Contact";
import About from "./components/Middle/About";
import Portfolio from "./components/Middle/Portfolio";
import Master from "./components/Top/Master";
import Modal from "./components/Others/Modal";
import PropTypes from "prop-types";

const App = ({ portfolioItems }) => (
  <div>
    <Menu />
    <Master />
    <Portfolio items={portfolioItems} />
    <About />
    <Contact />
    <FooterInfo />
    <Footer />
    {portfolioItems.map((icon, index) => (
      <Modal key={icon.id} icon={icon} itemNumber={index + 1} />
    ))}
  </div>
);
export default App;

// Para obligar pasar el argumento para la función
App.propTypes = {
  portfolioItems: PropTypes.array.isRequired,
};
