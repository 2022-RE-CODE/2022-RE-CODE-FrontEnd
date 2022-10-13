import { GET_USERINFO, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, UNAUTHORIZED_ERROR, FETCH_TOKEN_FAIL } from "../action/user.actionType"
import { initialState, UserReducerAction, UserReducerState } from "./user.reducerType"

// TODO :: GET_USERINFO
const userReducer = (state: UserReducerState = initialState, action: UserReducerAction) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem("ACCESS_TOKEN", action.payload);
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true
            }
        case LOGOUT_SUCCESS:
            localStorage.removeItem("ACCESS_TOKEN");
            return {
                ...state,
                token: null,
                isAuthenticated: false
            }
        case UNAUTHORIZED_ERROR:
        case LOGIN_FAIL:
        case FETCH_TOKEN_FAIL:
            return {
                ...state,
                token: null,
                isAuthenticated: false
            }
        case GET_USERINFO:
        default:
            return state;
    }
}

export default userReducer;