import {ADD_FILM, RESET, ADD_FAVORITE, REMOVE_FAVORITE} from './contants';

//Agregamos la película buscada a film
export const addFilm = data => {
  return {
    type: ADD_FILM,
    payload: data,
  };
};

//Agregamos la película seleccionada a favorites
export const addFavorite = data => {
  return {
    type: ADD_FAVORITE,
    payload: data,
  };
};

//Retiramos la película seleccionada de favorites
export const removeFavorite = data => {
  return {
    type: REMOVE_FAVORITE,
    payload: data,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};