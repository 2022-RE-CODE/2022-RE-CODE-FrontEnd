import React, { useState } from 'react'
import '../../styles/header.css';
import { BiMenu } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

type HeaderComponentProps = {
    isAuthenticated: boolean | null;
    onLogout: () => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
    isAuthenticated,
    onLogout
}) => {

    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.userReducer.user);
    const [searchEvent, setSearchEvent] = useState(0);
    const [onUserHover, setOnUserHover] = useState(0);

    const toCommunity = () => {
        navigate('/post');
    }

    const toUserInfo = (userId: number | undefined) => {
        navigate(`/user/${userId}`)
    }

    return (
        <div className="Header">
            <div className="Header--top">
                <div className="Header--logo-and-search">
                    <div className="Header--logo">
                        <Link to="/" className="Header--home-btn">
                            <img className="Header--logo-img" src='/logo-recode.png' alt="logo"/>
                        </Link>
                    </div>
                    <div className={searchEvent?"Header--search-container-gray":"Header--search-container"}>
                        <div className="Header--search-icon"><BiSearch /></div>
                        <input
                            className={searchEvent?"Header--search-input-gray":"Header--search-input"}
                            placeholder='관심있는 스택을 검색해보세요!'
                            onMouseOver={()=>{setSearchEvent(1)}}
                            onMouseOut={()=>{setSearchEvent(0)}}></input>
                    </div>
                </div>
                <div className="Header--auth-box">
                    {/* TODO :: 테스트 주석 삭제 */}
                    {/* {isAuthenticated ? */}
                        <div 
                            className="Header--user-info" 
                            onMouseOver={()=>{setOnUserHover(1)}}
                        >
                            <img src={user?.img} alt="userInfo"></img>
                            <div className="Header--user-info--name">{user?.nickname}님</div>
                            {onUserHover? 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
                                </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            }
                            {onUserHover? <div className="Header--user-info--menu" 
                                            onMouseOver={()=>{setOnUserHover(1)}} 
                                            onMouseOut={()=>{setOnUserHover(0)}}>
                                <div 
                                    className="Header--user-info--menu--myinfo"
                                    onClick={() => toUserInfo(user?.userId)}>
                                        내 정보 보기
                                    </div>
                            </div> : null}
                        </div>   
                        {/* : null */}
                    {/* } */}
                    {!isAuthenticated ?
                        <Link to="/login" className="Header--login-btn">
                            로그인
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                        </Link> :
                        <>
                            <button onClick={onLogout} className="Header--logout-btn">
                                로그아웃
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>
                            </button>
                        </>
                    }
                </div>
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