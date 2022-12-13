import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    MainContainer,
    LoginContainer, 
    CommunityContainer, 
    AuthContainer, 
    PostInfoContainer, 
    UserInfoContainer, 
    SecessionContainer,
    PostUploadContainer,
    PostModifyContainer,
    SettingContainer,
    PortfolioContainer
} from '../container';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainContainer />} />
                <Route path='/login' element={<LoginContainer />} />
                <Route path='/auth' element={<AuthContainer />} />
                <Route path='/post' element={<CommunityContainer />} />
                <Route path='/user/:id' element={<UserInfoContainer />} />
                <Route path='/post/:id' element={<PostInfoContainer />} />
                <Route path='/secession' element={<SecessionContainer />} />
                <Route path='/post/upload' element={<PostUploadContainer />} />
                <Route path='/portfolio/my' element={<PortfolioContainer />} />'
                <Route path='/portfolio/:portfolioId' element={<PortfolioContainer />} />'
                <Route path='/post/modify/:postId' element={<PostModifyContainer />} />'
                <Route path='/setting' element={<SettingContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;