import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CommunityContainer, LoginContainer, MainContainer, AuthContainer } from '../container';
import { PostContainer } from '../container/postContainer/PostContainer';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<MainContainer />} />
          <Route path='/login' element={<LoginContainer />} />
          <Route path='/auth' element={<AuthContainer />} />
          <Route path='/community' element={<CommunityContainer />} />
          <Route path='/post' element={<PostContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;