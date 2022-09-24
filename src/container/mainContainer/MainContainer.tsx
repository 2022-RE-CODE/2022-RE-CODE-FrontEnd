import React from 'react'
import BannerComponent from '../../components/bannerComponent'
import HeaderComponent from '../../components/headerComponent'
import PopularReviewerComponent from '../../components/popularReviewerComponent'
import SubTitleComponent from '../../components/subTitleComponent'
import ViewAllReviewsComponent from '../../components/viewAllReviewsComponent'

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