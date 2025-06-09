import * as actType from "@/store/screening/constants/byFilmId.js";
import { screeningApi } from "@/api/index.js";

const actGetScreeningsByFilmIdRequest = () => {
  return {
    type: actType.GET_SCREENING_BY_FILM_ID_REQUEST,
  };
};

const actGetScreeningsByFilmIdSuccess = (data) => {
  return {
    type: actType.GET_SCREENING_BY_FILM_ID_SUCCESS,
    payload: data,
  };
};

const actGetScreeningsByFilmIdFailure = (error) => {
  return {
    type: actType.GET_SCREENING_BY_FILM_ID_FAIL,
    payload: error,
  };
};

const actGetScreeningsByFilmId = (filmId) => {
  return async (dispatch) => {
    dispatch(actGetScreeningsByFilmIdRequest());

    try {
      const response = await screeningApi.getScreeningsByFilmId(filmId);
      console.log("actGetScreeningsByFilmId", response);
      dispatch(actGetScreeningsByFilmIdSuccess(response));
    } catch (error) {
      console.error("Error fetching screenings by film ID:", error);
      dispatch(actGetScreeningsByFilmIdFailure(error));
    }
  };
};

export default actGetScreeningsByFilmId;
