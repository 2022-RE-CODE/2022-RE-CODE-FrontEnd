import LoginComponent from '../../components/Auth/loginComponent'
import { RootState } from '../../redux'
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess, logoutSuccess } from '../../redux/user/action/user.action';

export const LoginContainer = () => {

    const dispatch = useDispatch();

    const onLogin = (token: string) => {
        dispatch(loginSuccess(token));
    }

    return (
        <div className='login-container'>
            <LoginComponent
                onLogin={onLogin}
            />
        </div>
    )
}