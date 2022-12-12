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
    ChatRoomContainer,
    PostModifyContainer
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
                <Route path='/chatRoom' element={<ChatRoomContainer />} />'
                <Route path='/post/modify/:postId' element={<PostModifyContainer />} />'
            
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;