import * as actType from "../constants/movieByGenre.js";
import { movieApi } from "@/api/index.js";

const actGetMovieByGenreRequest = () => {
  return {
    type: actType.GET_BY_GENRE_REQUEST,
  };
};

const actGetMovieByGenreSuccess = (data) => {
  return {
    type: actType.GET_BY_GENRE_SUCCESS,
    payload: data,
  };
};

const actGetMovieByGenreFail = (error) => {
  return {
    type: actType.GET_BY_GENRE_FAIL,
    payload: error,
  };
};

const actGetMovieByGenre = (data) => {
  return async (dispatch) => {
    dispatch(actGetMovieByGenreRequest());
    try {
      // Simulate an API call
      const response = await movieApi.getMoviesByGenre(data);
      console.log("movie by genre", response);
      dispatch(actGetMovieByGenreSuccess(response));
    } catch (error) {
      dispatch(actGetMovieByGenreFail(error));
    }
  };
};

export default actGetMovieByGenre;
