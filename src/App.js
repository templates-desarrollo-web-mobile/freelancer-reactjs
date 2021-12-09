import React from "react";
import Header from './components/Top/Header';
import Footer from './components/Bottom/Footer';
import FooterInfo from './components/Bottom/FooterInfo';
import Contact from './components/Bottom/Contact';
import About from './components/Middle/About';
import Portfolio from "./components/Middle/Portfolio";
import Master from "./components/Top/Master";
import Modal from './components/Others/Modal';
const App = () => {
  const portfolioItems = [
    {id: 'cabin', name: 'Log Cabin'}, 
    {id: 'cake', name: 'Tasty Cake'},
    {id: 'circus', name: 'Circus Tent'},
    {id: 'game', name: 'Controller'},
    {id: 'safe', name: 'Locked Safe'},
    {id: 'submarine', name: 'Submarine'}]
  return (
    <div>
      <Header />
      <Master />
      <Portfolio />
      <About />
      <Contact />
      <FooterInfo />
      <Footer />
      {portfolioItems.map((icon, index) => <Modal key={icon.id} icon={icon} itemNumber={index + 1}/>)}
    </div>
  );
};
export default App;
