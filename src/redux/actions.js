import {
  SET_DATA,
  RESET,
  GET_DATA,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from './contants';

//Agregamos la pelicula buscada a film
export const addFilm = data => {
  return {
    type: SET_DATA,
    payload: data,
  };
};

export const addFavorite = data => {
  return {
    type: ADD_FAVORITE,
    payload: data,
  };
};

export const removeFavorite = data => {
  return {
    type: REMOVE_FAVORITE,
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