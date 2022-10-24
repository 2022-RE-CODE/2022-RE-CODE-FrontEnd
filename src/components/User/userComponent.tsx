import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import instance from '../api/axios.instance';
import UserInfoComponent from './userInfoComponent';

// TODO :: Container 에서 instance.get 실행하고 이 컴포넌트 삭제
const UserComponent: React.FC = () => {

    const [user, setUser] = useState();
    //TODO :: Header IMG render
        
    const params = useParams();

    useEffect(() => {
        getUserInfo(params.id);
    }, []);

    const getUserInfo = async (id: string | undefined) => {
        try {
            const response = await instance.get(`user/${id}`);
            setUser(response.data);
        } catch(err) {  
            // TODO :: 예외 처리
            // setMessage(err);
        }
    }

    return (
        <div>
            <UserInfoComponent user={user}/>
        </div>
    )
}

export default UserComponent;