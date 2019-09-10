import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {logger} from 'redux-logger';
import {requestQuotesReducer} from './reducers';

export const store = createStore(requestQuotesReducer, applyMiddleware(thunkMiddleware, logger));