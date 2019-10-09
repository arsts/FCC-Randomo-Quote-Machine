import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {logger} from 'redux-logger';
import {requestQuotesReducer, generateColorReducer} from './reducers';

export const store = createStore(combineReducers({quotes: requestQuotesReducer, color: generateColorReducer}) , applyMiddleware(thunkMiddleware, logger));