import * as actType from "@/store/user/constants/signUp.js";

const initialState = {
    data: null,
    loading: false,
    error: null,
};

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case actType.SIGN_UP_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case actType.SIGN_UP_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null,
            };

        case actType.SIGN_UP_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default signUpReducer;