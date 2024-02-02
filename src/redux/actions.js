import {SET_DATA, RESET, GET_DATA} from './contants';

export const addFilm = data => {
  return {
    type: SET_DATA,
    payload: data,
  };
};


export const getData = data => {
  return {
    type: GET_DATA,
    payload: data,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};