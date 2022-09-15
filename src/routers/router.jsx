import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderContainer } from '../container';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HeaderContainer />} />
          <Route path='/login' element={<div>login</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;