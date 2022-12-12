import { useDispatch, useSelector } from 'react-redux';
import FooterComponent from '../../components/common/footerComponent';
import HeaderComponent from '../../components/common/headerComponent'
import SettingUserComponent from '../../components/Setting/settingUserComponent';
import { RootState } from '../../redux';
import { logoutSuccess } from '../../redux/user/action/user.action';
import useCheckToken from '../../utils/useCheckToken';

export const SettingContainer = () => {

    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logoutSuccess());
    }

    useCheckToken();

    return (
        <div className="community">
            <HeaderComponent
                isAuthenticated={isAuthenticated}
                onLogout={onLogout}
            />
            <SettingUserComponent />
            <FooterComponent />
        </div>
    )
}