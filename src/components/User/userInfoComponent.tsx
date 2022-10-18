import React, { useEffect, useState } from 'react';
import "../../styles/userinfo.css";
import { BiImageAlt } from "react-icons/bi"; 

type UserInfoComponentProps = {
    user: {
        userId: number,
        nickname: string,
        role: string,
        roles: string,
        position: string,
        gitLink: string | null,
        blogLink: string | null,
        img: string | null
    } | undefined
}

const UserInfoComponent: React.FC<UserInfoComponentProps> = ({ 
    user 
}: UserInfoComponentProps) => {
    return (
        <div className="userInfo">
            <div className="user-info--label"></div>
            <div className="user-info--card">
                <div className="user-img">
                    { user?.img?
                    <img src={user.img}></img>
                    : <BiImageAlt />
                    }
                </div>
                <div className="user-info--content">
                    <div className="user-code">유저코드 : {user?.userId}</div>
                    <div className="nickname">{user?.nickname}</div>
                    <div>{user?.position}END DEVELOPER</div>
                    <div>깃허브 링크 : {user?.gitLink}</div>
                    <div>블로그 링크 : {user?.blogLink}</div>
                </div>
            </div>
        </div>
    )
}

export default UserInfoComponent;