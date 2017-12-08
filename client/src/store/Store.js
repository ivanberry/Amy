import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { homeReducer } from '../reducers/reducers';
import  mySaga  from '../saga/saga';

const mySagaMiddle = createSagaMiddleware();
let middleware = [mySagaMiddle, logger];
const store = createStore(homeReducer, applyMiddleware(...middleware));

mySagaMiddle.run(mySaga);

export default store;
