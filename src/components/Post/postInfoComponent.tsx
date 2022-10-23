import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import instance from '../api/axios.instance';
import '../../styles/postinfo.css';
import FobbidenErrorComponent from '../Auth/fobbidenErrorComponent';

type PostInfoComponentProps = {
    isAuthenticated: boolean | null;
}

const PostInfoComponent: React.FC<PostInfoComponentProps> = ({
    isAuthenticated
}) => {

    const params = useParams();

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

    return (
        <div className="post-info">
            { isAuthenticated ? 
                <div></div> : 
                <FobbidenErrorComponent />
            }
        </div>
    )
}

export default PostInfoComponent;