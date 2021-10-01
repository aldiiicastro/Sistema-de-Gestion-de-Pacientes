import React from 'react';
import ReactDOM from 'react-dom';
import './estilos.css';
//import './index.css';
import Spg from './components/Spg';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <Spg />
  </React.StrictMode>,
  document.getElementById('Spg')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

