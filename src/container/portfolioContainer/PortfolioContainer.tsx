import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import HeaderComponent from '../../components/common/headerComponent'
import { RootState } from '../../redux';
import { logoutSuccess } from '../../redux/user/action/user.action';
import { useParams } from 'react-router-dom';
import useCheckToken from '../../utils/useCheckToken';
import PortfolioComponent from '../../components/Portfolio/portfolioComponent';

export const PortfolioContainer = () => {

    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);
    const dispatch = useDispatch();
    const { portfolioId } = useParams();
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
            <PortfolioComponent />
        </div>
    )
}