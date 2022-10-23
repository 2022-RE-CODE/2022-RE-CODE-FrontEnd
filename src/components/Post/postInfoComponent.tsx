import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import instance from '../api/axios.instance';
import '../../styles/postinfo.css';

type PostInfoComponentProps = {
    isAuthenticated: boolean | null;
}

const PostInfoComponent: React.FC<PostInfoComponentProps> = ({
    isAuthenticated
}) => {

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getUserInfo(params.id);
    }, []);

    const getUserInfo = async (id: string | undefined) => {
        try {
            const response = await instance.get(`post/find/detail/${id}`);
            console.log(response.data);
        } catch(err) {  
            // TODO :: 예외 처리
            // setMessage(err);
        }
    }

    const toLogin = () => {
        navigate("/login");
    }

    return (
        <div className="post-info">
            { isAuthenticated ? 
                <div></div> : 
                <div className="fobbiden-error">
                    <div className="error-title">서비스를 이용하려면 로그인이 필요합니다.</div>
                    <button className="post-info--redirect-loginBtn" onClick={toLogin}>로그인 창으로 이동하기</button>
                </div>
            }
        </div>
    )
}

export default PostInfoComponent;