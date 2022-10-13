import { GET_USERINFO, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, UNAUTHORIZED_ERROR } from "../action/user.actionType"
import { initialState, UserReducerAction, UserReducerState } from "./user.reducerType"

// TODO :: GET_USERINFO
const userReducer = (state: UserReducerState = initialState, action: UserReducerAction) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                token: null,
                isAuthenticated: false
            }
        case UNAUTHORIZED_ERROR:
        case LOGIN_FAIL:
        case GET_USERINFO:
    }
}

export default userReducer 