import React, { useEffect, useState } from 'react';

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
        <div>
            {user?.userId}
            {user?.nickname}
            {user?.role}
            {user?.roles}
            {user?.position}
            {user?.gitLink}
            {user?.blogLink}
            {user?.img}
        </div>
    )

}

export default UserInfoComponent;