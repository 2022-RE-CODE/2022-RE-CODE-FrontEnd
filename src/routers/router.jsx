import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainContainer } from '../container';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<MainContainer />} />
          <Route path='/login' element={<div>login</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;