import * as actType from "../constants/signIn.js";
import { setAuthData, clearAuthData } from "@/utils/auth.js";
import { userApi as authApi } from "@/api/index.js";

const actSignInRequest = () => {
  return {
    type: actType.SIGN_IN_REQUEST,
  };
};

const actSignInSuccess = (data) => {
  return {
    type: actType.SIGN_IN_SUCCESS,
    payload: data,
  };
};

const actSignInFail = (error) => {
  return {
    type: actType.SIGN_IN_FAIL,
    payload: error,
  };
};

const actLogout = () => {
  return {
    type: actType.LOGOUT,
  };
};

const actSignIn = (userData) => {
  return async (dispatch) => {
    dispatch(actSignInRequest());

    try {
      const response = await authApi.signIn(userData);
      console.log("actSignIn",response);
      setAuthData(response);
      dispatch(actSignInSuccess(response.data));
    } catch (error) {
      dispatch(actSignInFail(error));
    }
  };
};

const actLogoutUser = () => {
  return async (dispatch) => {
    try {
      clearAuthData();
      dispatch(actLogout());
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
};

export { actSignIn, actLogoutUser };