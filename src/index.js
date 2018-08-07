import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './App';
import RandomCocktail from './RandomCocktail';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />, 
  document.getElementById('main-field')
);

registerServiceWorker();
