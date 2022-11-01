import React, { useState } from 'react'
import '../../styles/header.css';
import { BiMenu } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';

type HeaderComponentProps = {
    isAuthenticated: boolean | null;
    onLogout: () => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
    isAuthenticated,
    onLogout
}) => {

    const navigate = useNavigate();

    const [searchEvent, setSearchEvent] = useState(0);

    const onMouseOverHandle = () => {
        setSearchEvent(1);
    }

    const onMouseOutHandle = () => {
        setSearchEvent(0);
    }

    const toCommunity = () => {
        navigate('/post');
    }

    return (
        <div className="Header">
            <div className="Header--top">
                <div className="Header--logo-and-search">
                    <div className="Header--logo">
                        <Link to="/" className="Header--home-btn">
                            <img className="Header--logo-img" src='/logo-recode.png' />
                        </Link>
                    </div>
                    <div className={searchEvent?"Header--search-container-gray":"Header--search-container"}>
                        <div className="Header--search-icon"><BiSearch /></div>
                        <input
                            className={searchEvent?"Header--search-input-gray":"Header--search-input"}
                            placeholder='관심있는 스택을 검색해보세요!'
                            onMouseOver={onMouseOverHandle}
                            onMouseOut={onMouseOutHandle}></input>
                    </div>
                </div>
                {!isAuthenticated ?
                    <Link to="/login" className="Header--login-btn">
                        로그인
                    </Link> :
                    <button onClick={onLogout} className="Header--logout-btn">
                        로그아웃
                    </button>}
            </div>

            <div className="Header--bottom">
                <div className="Header--category">
                    <BiMenu />
                    <div className="Header--category--text">카테고리</div>
                </div>
                <div className="Header--menu">
                    <div className="Header--menu-1" onClick = {toCommunity}>게시판</div>
                    <div className="Header--menu-2">채팅</div>
                    <div className="Header--menu-3">깃허브</div>
                    <div className="Header--menu-4">설정</div>
                </div>
            </div>
        </div>
    )
}
export default HeaderComponent;