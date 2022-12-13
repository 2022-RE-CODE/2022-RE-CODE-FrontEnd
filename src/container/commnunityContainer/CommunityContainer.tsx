import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ChatButtonComponent from '../../components/Portfolio/portfolioButtonComponent';
import FooterComponent from '../../components/common/footerComponent';
import HeaderComponent from '../../components/common/headerComponent'
import PostComponent from '../../components/Post/postComponent';
import { RootState } from '../../redux';
import { logoutSuccess } from '../../redux/user/action/user.action';
import useCheckToken from '../../utils/useCheckToken';

export const CommunityContainer = () => {

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
            <PostComponent />
            <ChatButtonComponent />
            <FooterComponent />
        </div>
    )
}