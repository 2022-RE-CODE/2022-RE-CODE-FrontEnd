import BannerComponent from '../../components/Main/bannerComponent'
import HeaderComponent from '../../components/headerComponent'
import PopularReviewerComponent from '../../components/Main/popularReviewerComponent'
import SubTitleComponent from '../../components/Main/subTitleComponent'
import ViewAllReviewsComponent from '../../components/Main/viewAllReviewsComponent'

export const MainContainer = () => {
    return(
        <div className="main"> 
            <HeaderComponent />
            <BannerComponent />
            <SubTitleComponent/>
            <ViewAllReviewsComponent/>
            <PopularReviewerComponent/>
        </div>
    )
}