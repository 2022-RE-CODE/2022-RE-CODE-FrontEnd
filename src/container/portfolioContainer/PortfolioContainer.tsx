import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import HeaderComponent from '../../components/common/headerComponent'
import { RootState } from '../../redux';
import { logoutSuccess } from '../../redux/user/action/user.action';
import useCheckToken from '../../utils/useCheckToken';
import PortfolioComponent from '../../components/Portfolio/portfolioComponent';
import { useNavigate } from 'react-router-dom';

export const PortfolioContainer = () => {

    const navigate = useNavigate();
    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logoutSuccess());
    }

    useEffect(() => {
        if (isAuthenticated === false) navigate('/fobbiden');
    }, [isAuthenticated, navigate])

    useCheckToken();

    return (
        <div className="community">
            <HeaderComponent
                isAuthenticated={isAuthenticated}
                onLogout={onLogout}
            />
            <PortfolioComponent />
        </div>
    )
}