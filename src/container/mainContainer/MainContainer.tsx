import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { getUserInfo, logoutSuccess } from '../../redux/user/action/user.action'
import { useCheckToken } from '../../utils'
import { useEffect } from 'react';

/** Components */
import BannerComponent from '../../components/main/bannerComponent'
import HeaderComponent from '../../components/common/headerComponent'
import PopularReviewerComponent from '../../components/main/popularReviewerComponent'
import SubTitleComponent from '../../components/main/subTitleComponent'
import ViewAllReviewsComponent from '../../components/main/viewAllReviewsComponent'
import FooterComponent from '../../components/common/footerComponent'


export const MainContainer = () => {

    useCheckToken();
    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logoutSuccess());
    }

    // useEffect(() => {
    //     dispatch(getUserInfo());
    // }, []);

    return (
        <div className="main">
            <HeaderComponent
                isAuthenticated={isAuthenticated}
                onLogout={onLogout}
            />
            <BannerComponent />
            <SubTitleComponent />
            <ViewAllReviewsComponent />
            <PopularReviewerComponent />
            <FooterComponent />
        </div>
    )
}