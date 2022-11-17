import LoginComponent from '../../components/auth/loginComponent'
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/user/action/user.action';

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