import * as actType from "../constants/byDate.js";
import { screeningApi } from "@/api/index.js";

const actGetScreeningsByDateRequest = () => {
  return {
    type: actType.GET_BY_DATE_REQUEST,
  };
};

const actGetScreeningsByDateSuccess = (data) => {
  return {
    type: actType.GET_BY_DATE_SUCCESS,
    payload: data,
  };
};

const actGetScreeningsByDateFail = (error) => {
  return {
    type: actType.GET_BY_DATE_FAIL,
    payload: error,
  };
};

const actScreeningsByDate = (date) => {
  return async (dispatch) => {
    dispatch(actGetScreeningsByDateRequest());

    try {
      const response = await screeningApi.getScreeningsByDate(date);
      console.log("Raw screenings response:", response);
      dispatch(actGetScreeningsByDateSuccess(response));
    } catch (error) {
      console.error("Error fetching screenings:", error);
      dispatch(actGetScreeningsByDateFail(error));
    }
  };
};

export default actScreeningsByDate;
