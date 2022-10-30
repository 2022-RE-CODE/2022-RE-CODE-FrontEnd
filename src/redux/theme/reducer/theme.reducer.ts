import { DARK_MODE, WHITE_MODE } from "../action/theme.actionType";
import { initialState, ThemeReducerAction, ThemeReducerState } from "./theme.reducerType";

const themeReducer = (state: ThemeReducerState = initialState, action: ThemeReducerAction) => {
    switch (action.type) {
        case DARK_MODE:
            return {
                theme: 'dark'
            }
        case WHITE_MODE:
            return {
                theme: 'white'
            }
        default:
            return state;
    }
}

export default themeReducer;