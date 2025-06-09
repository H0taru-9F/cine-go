import * as actType from "../constants/userDetails.js";
import { userApi } from "@/api/index.js";

const actUserDetailsRequest = () => {
  return {
    type: actType.GET_USER_DETAILS_REQUEST,
  };
};

export const actUserDetailsSuccess = (data) => {
  return {
    type: actType.GET_USER_DETAILS_SUCCESS,
    payload: data,
  };
};

const actUserDetailsFail = (error) => {
  return {
    type: actType.GET_USER_DETAILS_FAIL,
    payload: error,
  };
};

const actGetUserDetails = () => {
  return async (dispatch) => {
    dispatch(actUserDetailsRequest());

    try {
      const response = await userApi.getUser();
      dispatch(actUserDetailsSuccess(response));
    } catch (error) {
      dispatch(actUserDetailsFail(error));
    }
  };
};

export default actGetUserDetails;
