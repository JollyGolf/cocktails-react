import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import { Provider } from 'react-redux';
import MainField from './components/MainField';
//import allReducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

//const store = createStore(allReducers);

ReactDOM.render(
  <Fragment /*store={store}*/>
    <MainField />
  </Fragment>, 
  document.getElementById('root')
);
 
registerServiceWorker();

