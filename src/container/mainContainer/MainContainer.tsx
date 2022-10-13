import BannerComponent from '../../components/Main/bannerComponent'
import HeaderComponent from '../../components/headerComponent'
import PopularReviewerComponent from '../../components/Main/popularReviewerComponent'
import SubTitleComponent from '../../components/Main/subTitleComponent'
import ViewAllReviewsComponent from '../../components/Main/viewAllReviewsComponent'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'

export const MainContainer = () => {

    const isAuthenticated = useSelector((state: RootState) => state.userReducer.isAuthenticated);

    return(
        <div className="main"> 
            <HeaderComponent isAuthenticated={isAuthenticated}/>
            <BannerComponent />
            <SubTitleComponent/>
            <ViewAllReviewsComponent/>
            <PopularReviewerComponent/>
        </div>
    )
}