import React from 'react'
import BannerComponent from '../../components/bannerComponent'
import HeaderComponent from '../../components/headerComponent'
import SubTitleComponent from '../../components/subTitleComponent'
import ViewAllReviewComponent from '../../components/viewAllReviewComponent'

export const MainContainer = () => {
    return(
        <div className="main"> 
            <HeaderComponent />
            <BannerComponent />
            <SubTitleComponent/>
            <ViewAllReviewComponent/>
        </div>
    )
}