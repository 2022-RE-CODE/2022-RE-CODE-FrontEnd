import { getUserInfo, unauthorizedError, loginFail, logoutSuccess, loginSuccess, fetchTokenFail, fetchTokenSuccess } from "../action/user.action";

export type UserReducerAction =
    | ReturnType<typeof getUserInfo>
    | ReturnType<typeof unauthorizedError>
    | ReturnType<typeof loginFail>
    | ReturnType<typeof logoutSuccess>
    | ReturnType<typeof loginSuccess>
    | ReturnType<typeof fetchTokenFail>
    | ReturnType<typeof fetchTokenSuccess>;

export type UserType = {
    userId: number,
    nickname: string,
    role: string,
    roles: string,
    position: string,
    gitLink: string,
    blogLink: string,
    img: string
}

// TODO :: UserReducerState user 타입 정의
export type UserReducerState = {
    token: string | null, 
    isAuthenticated: boolean | null, 
    user: UserType | null, 
}

export const initialState = {
    token: localStorage.getItem('ACCESS_TOKEN'),
    isAuthenticated: null,
    user: null
};