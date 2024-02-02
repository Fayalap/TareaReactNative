import {SET_DATA, RESET} from './contants';

export const getData = data => {
  return {
    type: SET_DATA,
    payload: data,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};