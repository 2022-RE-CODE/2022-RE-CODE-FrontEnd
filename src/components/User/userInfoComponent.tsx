import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import instance from '../api/axios.instance';

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