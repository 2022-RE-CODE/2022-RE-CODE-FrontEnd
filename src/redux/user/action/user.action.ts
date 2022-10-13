import { GET_USERINFO, LOGIN_FAIL, UNAUTHORIZED_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./user.actionType";

export const getUserInfo = () => ({ type: GET_USERINFO });
export const unauthorizedError = () => ({ type: UNAUTHORIZED_ERROR });
export const loginFail = () => ({ type: LOGIN_FAIL });
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
export const loginSuccess = (token: string) => ({ 
    type: LOGIN_SUCCESS,
    payload: token,
});