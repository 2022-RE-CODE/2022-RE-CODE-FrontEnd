import { darkMode, whiteMode } from "../action/theme.action";

export type ThemeReducerAction = 
    | ReturnType<typeof darkMode>
    | ReturnType<typeof whiteMode>

export type ThemeReducerState = {
    theme: string | null
}

export const initialState = {
    theme: "white"
};