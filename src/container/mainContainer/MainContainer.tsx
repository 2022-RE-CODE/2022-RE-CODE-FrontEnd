import BannerComponent from '../../components/Main/bannerComponent'
import HeaderComponent from '../../components/headerComponent'
import PopularReviewerComponent from '../../components/Main/popularReviewerComponent'
import SubTitleComponent from '../../components/Main/subTitleComponent'
import ViewAllReviewsComponent from '../../components/Main/viewAllReviewsComponent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { fetchTokenFail, fetchTokenSuccess, logoutSuccess } from '../../redux/user/action/user.action'
import { useEffect } from 'react'

export const MainContainer = () => {

    
    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);
    const dispatch = useDispatch();
    
    const onLogout = () => {
        dispatch(logoutSuccess());
    }
    
    useEffect(() => {
        const token = localStorage.getItem("ACCESS_TOKEN");
        if (token) dispatch(fetchTokenSuccess(token));
        else dispatch(fetchTokenFail());
    }, []);

    return(
        <div className="main"> 
            <HeaderComponent 
                isAuthenticated={isAuthenticated}
                onLogout = {onLogout}
            />
            <BannerComponent />
            <SubTitleComponent/>
            <ViewAllReviewsComponent/>
            <PopularReviewerComponent/>
        </div>
    )
}