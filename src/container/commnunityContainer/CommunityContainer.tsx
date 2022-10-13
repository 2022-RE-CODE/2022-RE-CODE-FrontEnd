import React from 'react'
import { useSelector } from 'react-redux';
import HeaderComponent from '../../components/headerComponent'
import { RootState } from '../../redux';

export const CommunityContainer = () => {

    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);

    return(
        <div className="community"> 
            <HeaderComponent isAuthenticated={isAuthenticated}/>
        </div>
    )
}