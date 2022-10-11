import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CommunityContainer, LoginContainer, MainContainer } from '../container';
import { AuthContainer } from '../container/authContainer/AuthContainer';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<MainContainer />} />
          <Route path='/login' element={<LoginContainer />} />
          <Route path='/auth' element={<AuthContainer />} />
          <Route path='/community' element={<CommunityContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;