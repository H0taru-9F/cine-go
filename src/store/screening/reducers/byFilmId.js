import * as actType from "@/store/screening/constants/byFilmId.js";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const screeningByFilmIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case actType.GET_SCREENING_BY_FILM_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actType.GET_SCREENING_BY_FILM_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case actType.GET_SCREENING_BY_FILM_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default screeningByFilmIdReducer;
