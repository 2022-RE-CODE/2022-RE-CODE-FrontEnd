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
    // TODO :: 하드코딩 삭제
    user: {
        userId: 17,
        nickname: "nyong",
        role: "USER",
        roles: "USER",
        position: "FRONT",
        gitLink: "github.com/wonyongChoi05",
        blogLink: "개발용",
        img: "https://bssm-re-code.s3.ap-northeast-2.amazonaws.com/dfeca3b0-2ee3-4e75-a157-37dab9d3ed49_%E1%84%80%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB.jpeg"
    },
    // user: null
};