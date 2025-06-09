import * as actType from "@/store/screening/constants/byDateRange.js";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const screeningDateRangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actType.GET_SCREENING_DATE_RANGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actType.GET_SCREENING_DATE_RANGE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };

    case actType.GET_SCREENING_DATE_RANGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default screeningDateRangeReducer;
