import React from 'react'
import '../styles/header.css';
import { BiMenu } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';

const HeaderComponent: React.FC = () => {
    return (
        <div className="Header">
            <div className="Header--top">
                <div className="Header--logo-and-search">
                    <div className="Header--logo">
                        <img className="Header--logo-img" src={'logo-recode.png'}/>
                    </div>
                    <div className="Header--search-container">
                        {/* <select className="Header--search"></select> */}
                        <div className="Header--search-icon"><BiSearch /></div>
                        <input className="Header--search-input" placeholder='관심있는 스택을 검색해보세요!'></input>
                    </div>
                </div> 
                <Link to="login" className="Header--login-btn">
                    로그인
                </Link>
            </div>
            
            <div className="Header--bottom">
                <div className="Header--category">
                    <BiMenu />
                    <div className="Header--category--text">카테고리</div>
                </div>
                <div className="Header--menu">
                    <div className="Header--menu-1">게시판</div>
                    <div className="Header--menu-2">예시 1</div>
                    <div className="Header--menu-3">예시 2</div>
                    <div className="Header--menu-4">예시 3</div>
                </div>
            </div>
        </div>
    )
}
export default HeaderComponent;