import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import HeaderComponent from '../../components/headerComponent'
import PostComponent from '../../components/Post/postComponent';
import { RootState } from '../../redux';
import { logoutSuccess } from '../../redux/user/action/user.action';

export const CommunityContainer = () => {

    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logoutSuccess());
    }

    return(
        <div className="community"> 
            <HeaderComponent 
                isAuthenticated={isAuthenticated}
                onLogout={onLogout}
            />
            <PostComponent />
        </div>
    )
}