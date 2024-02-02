import {RESET, SET_DATA} from './contants';

let initialState = {
  favorites: {},
  films: {},
};

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_DATA:
      return {...state, films: actions.payload};
    case RESET:
      return {...initialState};
    default:
      return {...state};
  }
};

export default rootReducer;