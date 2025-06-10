import * as actType from "@/store/screening/constants/seatsById.js";
import { screeningApi } from "@/api/index.js";

const actGetSeatsByScreeningIdRequest = () => {
  return {
    type: actType.GET_SEATS_BY_SCREENING_ID_REQUEST,
  };
};

const actGetSeatsByScreeningIdSuccess = (data) => {
  return {
    type: actType.GET_SEATS_BY_SCREENING_ID_SUCCESS,
    payload: data,
  };
};

const actGetSeatsByScreeningIdFail = (error) => {
  return {
    type: actType.GET_SEATS_BY_SCREENING_ID_FAIL,
    payload: error,
  };
};

const actGetSeatsByScreeningId = (screeningId) => {
  return async (dispatch) => {
    dispatch(actGetSeatsByScreeningIdRequest());

    try {
      const response = await screeningApi.getSetsByScreeningId(screeningId);
      console.log("Raw seats response:", response);
      dispatch(actGetSeatsByScreeningIdSuccess(response));
    } catch (error) {
      console.error("Error fetching seats:", error);
      dispatch(actGetSeatsByScreeningIdFail(error));
    }
  };
};

export default actGetSeatsByScreeningId;
