import instance from "../../../components/api/axios.instance";
import { GET_USERINFO, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, UNAUTHORIZED_ERROR, FETCH_TOKEN_FAIL, FETCH_TOKEN_SUCCESS } from "../action/user.actionType"
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
            instance.delete("auth/logout", {
                headers: {
                    "Authorization": state.token || false
                }
            });
            return {
                ...state,
                token: null,
                isAuthenticated: false
            }
        case FETCH_TOKEN_SUCCESS:
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true
            }
        case FETCH_TOKEN_FAIL:
            return {
                ...state,
                token: null,
                isAuthenticated: false
            }
        case UNAUTHORIZED_ERROR:
            return state;
        case LOGIN_FAIL:
            return state;
        case GET_USERINFO:
            return state;
        default:
            return state;
    }
}

export default userReducer;