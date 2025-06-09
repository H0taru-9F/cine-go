import * as actType from "../constants/byDate.js";

const initialState = {
  loading: false,
  error: null,
  data: [],
  movieType: "now",
};

const screeningByDateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actType.GET_BY_DATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        data: [],
      };

    case actType.GET_BY_DATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: payload,
      };

    case actType.GET_BY_DATE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        data: [],
      };

    default:
      return state;
  }
};

export default screeningByDateReducer;
