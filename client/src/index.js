import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import './index.css';
import App from './App';
import { homeReducer } from './reducers/reducers';

// import registerServiceWorker from './registerServiceWorker';
const store = createStore(homeReducer, applyMiddleware(logger));

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
