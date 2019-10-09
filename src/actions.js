import {
  REQUEST_QUOTES_PENDING,
  REQUEST_QUOTES_SUCCESS,
  REQUEST_QUOTES_FAILED 
} from './constants';


export const requestQuotes = () => (dispatch) => {
  dispatch({ type: REQUEST_QUOTES_PENDING });
  fetch('https://api.kanye.rest/')
  .then(response => response.json())
  .then(data => dispatch({ type: REQUEST_QUOTES_SUCCESS, payload: data }))
  .catch(error => dispatch({ type: REQUEST_QUOTES_FAILED, payload: error }))
}
