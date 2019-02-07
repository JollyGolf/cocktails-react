import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import { Provider } from 'react-redux';
import Page from './components/Page';
import allReducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>, 
  document.getElementById('root')
);
 
registerServiceWorker();

