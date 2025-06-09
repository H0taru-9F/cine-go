import * as actType from "@/store/screening/constants/byDateRange.js";
import { screeningApi } from "@/api/index.js";

const actGetScreeningDateRangeRequest = () => {
  return {
    type: actType.GET_SCREENING_DATE_RANGE_REQUEST,
  };
};

const actGetScreeningDateRangeSuccess = (data) => {
  return {
    type: actType.GET_SCREENING_DATE_RANGE_SUCCESS,
    payload: data,
  };
};

const actGetScreeningDateRangeFail = (error) => {
  return {
    type: actType.GET_SCREENING_DATE_RANGE_FAIL,
    payload: error,
  };
};

const actGetScreeningDateRange = (startDate, endDate) => {
  return async (dispatch) => {
    dispatch(actGetScreeningDateRangeRequest());

    try {
      const response = await screeningApi.getScreeningsByDateRange(startDate, endDate);
      console.log("actGetScreeningDateRange", response);
      dispatch(actGetScreeningDateRangeSuccess(response));
    } catch (error) {
      dispatch(actGetScreeningDateRangeFail(error));
    }
  };
};

export default actGetScreeningDateRange;
