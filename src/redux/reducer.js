import {RESET, SET_DATA, GET_DATA} from './contants';

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
    case RESET:
      return {...initialState};
    default:
      return {...state};
  }
};

export default rootReducer;