import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CommunityContainer, LoginContainer, MainContainer, AuthContainer } from '../container';
import { PostInfoContainer } from '../container/postInfoContainer/PostInfoContainer';
import { UserInfoContainer } from '../container/userInfoContainer/UserInfoContainer';

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
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;