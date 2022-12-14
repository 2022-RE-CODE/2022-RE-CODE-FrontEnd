import { useDispatch, useSelector } from 'react-redux';
import FobbidenErrorComponent from '../../components/Auth/fobbidenErrorComponent'
import HeaderComponent from '../../components/common/headerComponent';
import { RootState } from '../../redux';
import { logoutSuccess } from '../../redux/user/action/user.action';
import '../../styles/fobbiden.css';

export const FobbidenContainer = () => {

    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logoutSuccess());
    }

    return (
        <div className='fobbiden-wrapper'>
            <HeaderComponent
                isAuthenticated={isAuthenticated}
                onLogout={onLogout}
            />
            <FobbidenErrorComponent />
        </div>
    )
}