import { combineReducers } from 'redux';
import userReducer from './user/reducer/user.reducer';

const rootReducer = combineReducers({
    userReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;