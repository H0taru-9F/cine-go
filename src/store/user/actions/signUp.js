import {setAuthData} from "@/utils/auth.js";
import {userApi as authApi} from "@/api/index.js";
import * as actType from "@/store/user/constants/signUp.js";

const actSignUpRequest = () => {
    return {
        type: actType.SIGN_UP_REQUEST,
    };
};

const actSignUpSuccess = (data) => {
    return {
        type: actType.SIGN_UP_SUCCESS,
        payload: data,
    };
};

const actSignUpFail = (error) => {
    return {
        type: actType.SIGN_UP_FAIL,
        payload: error,
    };
};

const actSignUp = (userData) => {
    return async (dispatch) => {
        dispatch(actSignUpRequest());

        try {
            const response = await authApi.SignUp(userData);
            setAuthData(response);
            dispatch(actSignUpSuccess(response));
        } catch (error) {
            dispatch(actSignUpFail(error));
        }
    };
};

export {actSignUp};