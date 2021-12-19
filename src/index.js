import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import {portfolioItems} from "./helpers/portfolioItems";
ReactDOM.render(
  <React.StrictMode>
    <App portfolioItems={portfolioItems}/>
  </React.StrictMode>,
  document.getElementById('root')
);

