import * as actType from "../constants/signIn.js";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case actType.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actType.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };

    case actType.SIGN_IN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case actType.LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default signInReducer;