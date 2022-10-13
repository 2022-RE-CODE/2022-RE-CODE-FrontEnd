import { getUserInfo, unauthorizedError, loginFail, logoutSuccess, loginSuccess, fetchTokenFail } from "../action/user.action";

export type UserReducerAction =
    | ReturnType<typeof getUserInfo>
    | ReturnType<typeof unauthorizedError>
    | ReturnType<typeof loginFail>
    | ReturnType<typeof logoutSuccess>
    | ReturnType<typeof loginSuccess>
    | ReturnType<typeof fetchTokenFail>;

// TODO :: UserReducerState user 타입 정의
export type UserReducerState = {
    token: string | null,
    isAuthenticated: boolean | null,
    user: any | null,
}

export const initialState = {
    token: localStorage.getItem('ACCESS_TOKEN'),
    isAuthenticated: null,
    user: null,
};