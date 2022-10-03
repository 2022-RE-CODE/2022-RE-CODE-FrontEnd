import React from 'react'
import AuthComponent from '../../components/authComponent'
import HeaderComponent from '../../components/headerComponent'

export const AuthContainer = () => {
    return(
        <div className='auth-container'>
            <HeaderComponent/>
            <AuthComponent/>
        </div>
    )
}