import { combineReducers } from "redux";

import movieDetailsReducer from "./movie/reducers/movieDetails.js";
import userDetailsReducer from "./user/reducers/userDetails.js";
import screeningByDateReducer from "@/store/screening/reducers/byDate.js";
import signInReducer from "@/store/user/reducers/signIn.js";
import signUpReducer from "@/store/user/reducers/signUp.js";
import screeningDateRangeReducer from "@/store/screening/reducers/byDateRange.js";
import movieByGenreReducer from "@/store/movie/reducers/movieByGenre.js";
import screeningByFilmIdReducer from "@/store/screening/reducers/byFilmId.js";

const rootReducer = combineReducers({
  screeningByFilmId: screeningByFilmIdReducer,
  movieByGenre: movieByGenreReducer,
  screeningDateRange: screeningDateRangeReducer,
  screeningByDate: screeningByDateReducer,
  movieDetails: movieDetailsReducer,
  userDetails: userDetailsReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
});

export default rootReducer;
