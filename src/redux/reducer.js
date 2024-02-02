import {
  RESET,
  SET_DATA,
  GET_DATA,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from './contants';

let initialState = {
  favorites: [],
  films: [],
};

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_DATA:
      return {...state, films: actions.payload};
    case SET_DATA:
      const exists = state.films.some(
        film => film.Title === actions.payload.Title,
      );
      if (!exists) {
        const updatedFilms = [...state.films, actions.payload];
        return {...state, films: updatedFilms};
      }
      return state;
    case ADD_FAVORITE:
      const existsFavorite = state.favorites.some(
        film => film.Title === actions.payload.Title,
      );
      if (!existsFavorite) {
        const updatedFavorites = [...state.favorites, actions.payload];
        return {...state, favorites: updatedFavorites};
      }
      return state;
    case REMOVE_FAVORITE:
      const updatedFavorites = state.favorites.filter(
        film => film.Title !== actions.payload.Title,
      );
      return {...state, favorites: updatedFavorites};

    case RESET:
      return {...initialState};
    default:
      return {...state};
  }
};

export default rootReducer;