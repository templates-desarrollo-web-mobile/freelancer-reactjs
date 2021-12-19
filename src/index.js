import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
const portfolioItems = [
  { id: "cabin", name: "Log Cabin" },
  { id: "cake", name: "Tasty Cake" },
  { id: "circus", name: "Circus Tent" },
  { id: "game", name: "Controller" },
  { id: "safe", name: "Locked Safe" },
  { id: "submarine", name: "Submarine" },
];
ReactDOM.render(
  <React.StrictMode>
    <App portfolioItems={portfolioItems}/>
  </React.StrictMode>,
  document.getElementById('root')
);

