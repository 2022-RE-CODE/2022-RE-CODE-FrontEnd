import { UserType } from "../reducer/user.reducerType";
import { 
    GET_USERINFO, 
    LOGIN_FAIL, 
    UNAUTHORIZED_ERROR, 
    LOGIN_SUCCESS, 
    LOGOUT_SUCCESS,
    FETCH_TOKEN_FAIL, 
    FETCH_TOKEN_SUCCESS
} from "./user.actionType";

export const getUserInfo = (user: UserType) => ({ 
    type: GET_USERINFO,
    payload: user
});
export const unauthorizedError = () => ({ type: UNAUTHORIZED_ERROR });
export const loginFail = () => ({ type: LOGIN_FAIL });
export const fetchTokenFail = () => ({ type: FETCH_TOKEN_FAIL })
export const fetchTokenSuccess = (token: string) => ({ 
    type: FETCH_TOKEN_SUCCESS,
    payload: token
});
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
export const loginSuccess = (token: string) => ({ 
    type: LOGIN_SUCCESS,
    payload: token,
});