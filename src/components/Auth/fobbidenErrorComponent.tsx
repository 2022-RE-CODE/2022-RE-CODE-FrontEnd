import React from 'react'
import { useState } from 'react';
import '../../styles/login.css';
import { useNavigate } from 'react-router-dom';
// TODO :: css 분리
import '../../styles/postinfo.css';

const FobbidenErrorComponent = () => {

    const navigate = useNavigate();
    
    const toLogin = () => {
        navigate("/login");
    }

    return (
        <div className="fobbiden-error">
            <div className="error-title">서비스를 이용하려면 로그인이 필요합니다.</div>
            <button className="post-info--redirect-loginBtn" onClick={toLogin}>로그인 창으로 이동하기</button>
        </div>
    );
}
export default FobbidenErrorComponent;