import HeaderComponent from '../../components/headerComponent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { logoutSuccess } from '../../redux/user/action/user.action'
import UserComponent from '../../components/User/userComponent'

export const UserInfoContainer = () => {

    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);
    const dispatch = useDispatch();
    
    const onLogout = () => {
        dispatch(logoutSuccess());
    }

    return(
        <div className="userinfo-container"> 
            <HeaderComponent 
                isAuthenticated={isAuthenticated}
                onLogout = {onLogout}
            />
            <UserComponent />
        </div>
    )
}