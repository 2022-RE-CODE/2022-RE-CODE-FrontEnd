import BannerComponent from '../../components/Main/bannerComponent'
import HeaderComponent from '../../components/headerComponent'
import PopularReviewerComponent from '../../components/Main/popularReviewerComponent'
import SubTitleComponent from '../../components/Main/subTitleComponent'
import ViewAllReviewsComponent from '../../components/Main/viewAllReviewsComponent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { logoutSuccess } from '../../redux/user/action/user.action'
import instance from '../../components/api/axios.instance'
import useCheckToken from '../../utils/useCheckToken'

export const MainContainer = () => {
    
    useCheckToken();

    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logoutSuccess());
    }


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
        </div>
    )
}