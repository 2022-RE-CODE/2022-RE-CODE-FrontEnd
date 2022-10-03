import React from 'react'
import HeaderComponent from '../../components/headerComponent'
import LoginComponent from '../../components/loginComponent'

export const LoginContainer = () => {
    return(
        <div className='login-container'>
            <HeaderComponent/>
            <LoginComponent/>
        </div>
    )
}