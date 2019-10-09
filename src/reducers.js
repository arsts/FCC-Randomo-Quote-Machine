import {
  REQUEST_QUOTES_PENDING,
  REQUEST_QUOTES_SUCCESS,
  REQUEST_QUOTES_FAILED
} from './constants';

const initialState = {
  isPending: false,
  quotes: [],
  error: '',
  newColor: '',
  generateColor() {
    return '#' + Math.random().toString(16).substr(-6);
  } 
}

export const requestQuotesReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case REQUEST_QUOTES_PENDING: 
      return Object.assign({}, state, { isPending: true })
    case REQUEST_QUOTES_SUCCESS: 
      return Object.assign({}, state, { quotes: action.payload })
    case REQUEST_QUOTES_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}

export const generateColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_QUOTES_SUCCESS:
      return Object.assign({}, state, {  newColor: state.generateColor()
        })
    default:
      return state;
  }
}




