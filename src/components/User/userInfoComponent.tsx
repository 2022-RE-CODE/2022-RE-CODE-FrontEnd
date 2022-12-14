import React from 'react';
import "../../styles/userinfo.css";
import { BiImageAlt } from "react-icons/bi";

type UserInfoComponentProps = {
    user: {
        userId: number,
        nickname: string,
        role: string,
        roles: string,
        position: string,
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
                    <img src={user.img} className="user-img-tag" alt="userImg"></img>
                    : <BiImageAlt />
                    }
                </div>
                <div className="user-info--content">
                    <div className="user-code">유저코드 : {user?.userId}</div>
                    <div className="nickname">{user?.nickname}</div>
                    <div>{user?.position}END DEVELOPER</div>
                </div>
            </div>    
        </div>
    )
}

export default UserInfoComponent;