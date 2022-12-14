import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { logoutSuccess } from '../../redux/user/action/user.action'
import { useCheckToken } from '../../utils'

/** Components */
import BannerComponent from '../../components/Main/bannerComponent'
import HeaderComponent from '../../components/common/headerComponent'
import PopularReviewerComponent from '../../components/Main/popularReviewerComponent'
import SubTitleComponent from '../../components/Main/subTitleComponent'
import ViewAllReviewsComponent from '../../components/Main/viewAllReviewsComponent'
import FooterComponent from '../../components/common/footerComponent'
import PortfolioButtonComponent from '../../components/Portfolio/portfolioButtonComponent'


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
            <PopularReviewerComponent />
            <ViewAllReviewsComponent />
            <PortfolioButtonComponent />
            <FooterComponent />
        </div>
    )
}