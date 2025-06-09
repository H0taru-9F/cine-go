import * as actTypes from "../constants/movieByGenre.js";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const movieByGenreReducer = (state = initialState, action) => {
  switch (action.type) {
    case actTypes.GET_BY_GENRE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actTypes.GET_BY_GENRE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case actTypes.GET_BY_GENRE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default movieByGenreReducer;
